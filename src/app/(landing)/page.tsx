"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar";
import DigitalCard from "@/components/digitalCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { certifcations } from "../api/cert";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center mb-16 px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold mb-2 text-center">
            xynil.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 text-center">
            Developer
          </p>
          <p className="max-w-2xl mx-auto mb-6 font-sans leading-loose md:text-lg font-semibold sm:text-base text-center">
            Hi! My name is Xy! A developer that is currently studying Computer
            Science. I am passionate in uplifting other developers by teaching
            what I know, because for me, this is my way of saying thank you to
            the CS community! I would love to exchange ideas with you! 
          </p>
          <div className="flex justify-center sm:flex-row gap-4 w-full max-w-md">
          
            {/*LinkedIn Button*/}
            <Button asChild className="w-full sm:w-auto">
              <Link
                href="https://www.linkedin.com/in/xynil-jhed-lacap-76ba9029a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </Button>
            
            {/*GitHub Button*/}
            <Button asChild className="w-full sm:w-auto">
              <Link
                href="https://github.com/mr-jones123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
            </Button>

            {/*Digital Business Card Button*/}
            <Dialog>
              <DialogTrigger asChild>
                <Button  className="w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10h2"/><path d="M16 14h2"/>
                  <path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gradient-to-r from-[#000000] to-[#444444] h-[300px] border-none">
                  <DigitalCard/>
              </DialogContent>
            </Dialog>
    
            
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            My Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifcations.map((cert, index) => (
              <Link key={index} href={cert.link} className="group">
                <Card className="h-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={cert.thumbnail}
                        alt={"Certificate"}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-center">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>Click to view certificate</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Client Recommendations Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center font-sans">
            Client Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                person: "Justine Jude Pura, MBA (傅佳璟)",
                feedback:
                  "One of Xynil's notable strengths is his proficiency in project development, particularly in utilizing GitHub for effective collaboration within his team. While there is room for growth in team management skills, Xynil's dedication and determination make him well-suited for future success.",
              },
              {
                person: "Alpha Romer Coma, Software Engineer",
                feedback:
                  "His enthusiasm for mastering new technologies like Java, Back-End Development, Git/GitHub, Cloud Computing, and other software development skills, along with his drive for empowering others, showcases his capabilities as a tech leader and mentor.",
              },
            ].map((client, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{client.person}</CardTitle>
                  <CardDescription>{client.feedback}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
