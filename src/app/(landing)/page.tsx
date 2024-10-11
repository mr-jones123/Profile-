import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata = {
  title: "Xy",
  description: "Hi, my name is Xy",
  icons: {
    icon: '/favicon.ico', 
  },
};
export default function Home() {
  return (
    <> 
    <Head>
        <link rel="icon" href="/Logo.jpg" />
    </Head>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-8">
              <Image
                src="/me.jpg"
                alt="Xynil Jhed Lacap"
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-4xl font-sans font-extrabold mb-2">
            Xynil Jhed Lacap
          </h1>
          <p className="text-xl text-muted-foreground mb-4">Developer</p>
          <p className="max-w-2xl mx-auto mb-6 font-sans leading-loose">
            Hi! My name is Xy! A developer that is currently studying Computer
            Science. I am passionate in uplifting other developers by teaching
            what I know, because for me, this is my way of saying thank you to
            the CS community! I would love to exchange ideas with you! Feel free
            to connect with me &lt;33
          </p>
          <Button asChild>
            <Link
              href="https://www.linkedin.com/in/xynil-jhed-lacap-76ba9029a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect via LinkedIn
            </Link>
          </Button>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            My Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "CCNA Networking 1",
                link: "https://www.credly.com/badges/dc25122f-6542-4156-ba5b-6ca4b0b989cd/linked_in_profile",
              },
              {
                title: "IT Specialist Python",
                link: "https://www.credly.com/badges/3395c826-8449-4710-8756-dd91ec998733/public_url",
              },
              {
                title: "GitHub Foundations",
                link: "https://www.credly.com/badges/9bd3f90d-6e7f-46b6-987b-a5d567956bb6/public_url",
              },
              {
                title: "Oracle Certified Professional-AI",
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5902AED8C94E8FBB488F0BFE909F6088B1B562CFD0518B74F7A3F345354ED61D",
              },
            ].map((cert, index) => (
              <Link key={index} href={cert.link} className="group">
                <Card className="transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>Click to view certificate</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Client Recommendations Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Client Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                {
                    person : "Justine Jude Pura, MBA (傅佳璟)",
                    feedback: "One of Xynil's notable strengths is his proficiency in project development, particularly in utilizing GitHub for effective collaboration within his team. While there is room for growth in team management skills, Xynil's dedication and determination make him well-suited for future success."
                },
                {
                    person: "Alpha Romer Coma, Software Engineer",
                    feedback: "His enthusiasm for mastering new technologies like Java, Back-End Development, Git/GitHub, Cloud Computing, and other software development skills, along with his drive for empowering others, showcases his capabilities as a tech leader and mentor."
                }

            ].map((client , index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{client.person}</CardTitle>
                  <CardDescription>
                    {client.feedback}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
