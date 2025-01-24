"use client";
import Image from "next/image";
import Link from 'next/link';
import { PinContainer } from "@/components/ui/3d-pin";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { certifications } from "../static-data/cert";
import { projects } from "../static-data/proj";
import { motion} from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Testimonials from "@/components/ui/testimonials";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main className="container mx-auto py-8 md:py-16">
      <h1 className="text-customWhite px-3 text-center text-5xl md:text-8xl font-bold">my name is xy</h1>
      <CardContainer className="mb-20">
      <CardBody className="relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white"
        >
          Software Engineer && Full-Stack Developer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="font-sans text-sm max-w-sm mt-2 text-customGrey"
        >
          ...to have lived without leaving a trace of one&apos;s existence, is to not have lived at all
          {" "}<span className="italic font-semibold">- Napoleon Bonaparte </span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/my-notion-face-portrait.png"
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>


        {/* Projects */}
        <motion.section className="flex flex-col gap-6 items-center">
          <div className="flex flex-col md:flex-row justify-center align-baseline gap-6 md:gap-28 max-w-[800px] px-4 md:px-0">
            <h1 className="text-customWhite text-3xl md:text-5xl font-bold tracking-tight leading-tight text-center md:text-left">
              My Glorious Projects.
            </h1>
            <div className="flex flex-col justify-end">
              <h2 className="text-customGrey text-lg md:text-xl leading-[1.2] tracking-[-0.015em] text-center md:text-left">
                <span className="italic">
                  &quot;When you&apos;re going to change the world, don&apos;t
                  ask for permission.&quot;
                </span>{" "}
              </h2>
            </div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
              },
            }}
            initial="hidden"
            whileInView="show"
          >
            {projects.map((project, key) => (
              <motion.div
                key={key}
                className="w-72"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <PinContainer
                  href={project.link}
                  title={project.link}
                  containerClassName="h-72"
                >
                  <Card className="w-72 h-64">
                    <CardHeader className="p-4">
                      <CardTitle className="text-xl md:text-3xl tracking-tight">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardDescription className="line-clamp-3 font-sans text-sm">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </PinContainer>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          className="mt-40 px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-customWhite text-3xl md:text-5xl font-bold">
              Certifications
            </h1>
            <h2 className="text-customGrey text-lg md:text-xl mt-2">
              Milestones in my journey
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link href={cert.link}>
                  <Card className="h-full overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={cert.image}
                          alt="Certification Image"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h1 className="text-white text-lg font-extra-bold">
                            {cert.title}
                          </h1>
                          <p className="text-white font-sans font-semibold text-center text-sm">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Blogs */}
        <motion.section
          className="flex flex-col gap-6 items-center justify-center mt-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-center align-baseline gap-6 md:gap-28 max-w-[800px] px-4 md:px-0">
            <h1 className="text-customWhite text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-center md:text-left">
              Blogs
            </h1>
          </div>
          <motion.div
            className="mt-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
          >
            <Card className="w-72 h-64">
              <CardHeader className="p-4">
                <CardTitle className="text-xl md:text-3xl tracking-tight">
                  Coming Soon
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="line-clamp-3 text-sm">
                  It will come soon enough...
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="flex flex-col gap-6 items-center justify-center mt-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-customWhite text-3xl md:text-5xl font-bold text-center">
            Testimonials
          </h1>
          <h2 className="text-customGrey text-lg md:text-xl text-center">
            Hear from the best.
          </h2>
          <Testimonials />
        </motion.section>
      </main>
    </div>
  );
}
