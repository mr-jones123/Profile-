import type { SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

// Define types for Sanity content
interface SanityImage {
  url: string
  alt?: string
}

interface SanityBlock {
  _type: string
  _key: string
  style?: string
  children?: Array<{
    _type: string
    _key: string
    text?: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    _key: string
    href?: string
    _ref?: string
  }>
  asset?: {
    url: string
  }
  alt?: string
}

interface SanityAuthor {
  name: string
  imageUrl?: string
}

interface SanityPost extends SanityDocument {
  title: string
  slug: { current: string }
  publishedAt: string
  body: SanityBlock[]
  imageUrl: string
  author?: SanityAuthor
  estimatedReadingTime?: number
  bodyImages?: SanityImage[]
}

// Updated query to include body images
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  "imageUrl": mainImage.asset->url,
  "author": author->{name, "imageUrl": image.asset->url},
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),  
  "bodyImages": body[]{
    _type == "image" => {
      "url": asset->url,
      alt
    }
  }
}`

const options = { next: { revalidate: 30 } }

// Helper function to check if a URL is internal or external
function isInternalLink(href: string): boolean {
  // If it doesn't start with http/https and doesn't have a domain, it's internal
  return !href.startsWith("http") && !href.startsWith("//") && !href.includes("://")
}

// Custom function to render Sanity content blocks
function renderBlock(block: SanityBlock, post: SanityPost): React.ReactNode {
  if (!block || !block._type) return null

  // Handle different block types
  switch (block._type) {
    case "block":
      const style = block.style || "normal"

      // Process the text with marks (links, bold, italic, etc.)
      const content = block.children?.map((child) => {
        if (!child.marks || child.marks.length === 0) {
          return child.text
        }

        // Start with the plain text
        let result: React.ReactNode = child.text

        // Apply marks (formatting and links)
        child.marks?.forEach((markKey) => {
          // Find mark definition for links
          const markDef = block.markDefs?.find((def) => def._key === markKey)

          if (markDef && markDef._type === "link" && markDef.href) {
            // Check if it's an internal or external link
            if (isInternalLink(markDef.href)) {
              // Internal link - use Next.js Link
              result = (
                <Link
                  href={markDef.href}
                  className="text-primary  text-white underline hover:text-primary/80 transition-colors"
                >
                  {result}
                </Link>
              )
            } else {
              // External link - use regular anchor tag
              result = (
                <a
                  href={markDef.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-white underline hover:text-gray-400 transition-colors"
                >
                  {result}
                </a>
              )
            }
          } else if (markKey === "strong") {
            // Bold text
            result = <strong className="font-bold text-white">{result}</strong>
          } else if (markKey === "em") {
            // Italic text
            result = <em className="italic text-white">{result}</em>
          }
          // Add more mark types as needed
        })

        return <React.Fragment key={child._key}>{result}</React.Fragment>
      })

      // Render the block based on its style
      switch (style) {
        case "h1":
          return (
            <h1 key={block._key} className="text-4xl text-white font-bold mt-12 mb-4">
              {content}
            </h1>
          )
        case "h2":
          return (
            <h2 key={block._key} className="text-3xl text-white font-bold mt-10 mb-4">
              {content}
            </h2>
          )
        case "h3":
          return (
            <h3 key={block._key} className="text-2xl text-white font-bold mt-8 mb-4">
              {content}
            </h3>
          )
        case "blockquote":
          return (
            <blockquote key={block._key} className="border-l-4 text-white font-inter border-primary pl-4 italic my-6">
              {content}
            </blockquote>
          )
        case "normal":
        default:
          return (
            <p key={block._key} className="text-lg text-white mb-6 font-inter leading-relaxed">
              {content}
            </p>
          )
      }

    case "image":
      // For image blocks, we need to find the corresponding image in bodyImages
      let imageUrl = ""
      let imageAlt = ""

      if (block.asset?.url) {
        // If the block itself has an asset URL, use that
        imageUrl = block.asset.url
        imageAlt = block.alt || "Blog image"
      } else if (post.bodyImages && post.bodyImages.length > 0) {
        // Find the image in bodyImages that corresponds to this block
        // We need to count how many image blocks we've seen so far
        const currentIndex = post.body.findIndex((item) => item._key === block._key)

        // Count image blocks up to the current index
        let imageCount = 0
        for (let i = 0; i <= currentIndex; i++) {
          if (post.body[i]._type === "image") {
            imageCount++
          }
        }

        // Find the corresponding image in bodyImages
        // We need to find the non-null image at position imageCount-1
        let validImageCount = 0
        let targetImage = null

        for (let i = 0; i < post.bodyImages.length; i++) {
          if (post.bodyImages[i] && post.bodyImages[i].url) {
            if (validImageCount === imageCount - 1) {
              targetImage = post.bodyImages[i]
              break
            }
            validImageCount++
          }
        }

        if (targetImage) {
          imageUrl = targetImage.url
          imageAlt = targetImage.alt || "Blog image"
        }
      }

      // If we still don't have an image URL, use a placeholder
      if (!imageUrl) {
        imageUrl = "/placeholder.svg"
      }

      return (
        <div key={block._key} className="relative w-full h-96 my-8">
          <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover rounded-lg" />
        </div>
      )

    default:
      return null
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityPost>(POST_QUERY, { slug: params.slug }, options)

  if (!post) {
    return <div className="text-center py-20">Post not found</div>
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Filter out null values from bodyImages
  if (post.bodyImages) {
    post.bodyImages = post.bodyImages.filter((img) => img && img.url)
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>

      {/* Hero section with image */}
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          priority
          className="object-cover rounded-xl"
        />
      </div>

      {/* Title and metadata */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight mb-4">{post.title}</h1>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={post.author?.imageUrl} alt={post.author?.name} />
              <AvatarFallback>{post.author?.name?.charAt(0) || "A"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-gray-300 ">{post.author?.name || "Anonymous"}</p>
              <p className="text-sm text-gray-300 text-muted-foreground">{formattedDate}</p>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">{post.estimatedReadingTime || 5} min read</div>
        </div>
      </div>

      {/* Blog content */}
      <div className="prose prose-lg dark:prose-invert max-w-none font-inter">
        {post.body?.map((block) => renderBlock(block, post))}
      </div>
    </article>
  )
}

