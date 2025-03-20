import type { SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {useState, useEffect} from "react"

// Updated query to include body images
const POST_QUERY = `*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  "bodyImages": body[ _type == "image" ]{
    "url": asset->url,
    alt
  }
}`

const options = { next: { revalidate: 30 } }

export default function SanityBlogs(){
  const [queryResults, setQueryResults] = useState<SanityDocument[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      const fetchPost = async () =>{
          setLoading(true);
          try{
            const queryResponse = await client.fetch<SanityDocument[]>(POST_QUERY, {}, options)
            setQueryResults(queryResponse);
          } catch (err){
            console.log(err)
          } finally {
            setLoading(false);
          }
      }
      fetchPost();
  },[]);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
        {loading? <h1 className="text-2xl text-white">Loading Contents</h1> : queryResults?.map((post) => (
          <Link
            key={post._id}
            href={`/${post.slug.current}`}
            className="block transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Card className="h-full overflow-hidden border-0 bg-black/90 text-white shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  fill
                  alt={post.title || "Blog post image"}
                  src={post.imageUrl || "/placeholder.svg?height=400&width=600"}
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              <CardHeader className="p-4 pb-2">
                <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight">{post.title}</CardTitle>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                {post.excerpt && <p className="line-clamp-2 text-sm text-gray-300 mb-2">{post.excerpt}</p>}
                <p className="text-xs text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
