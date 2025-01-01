"use client";
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
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d0b]">
      <main className="container mx-auto py-8 md:py-16">
        <motion.section
          className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between align-baseline h-[100dvh] "
          style={{ opacity, scale }}
        >
          <h1 className="text-customWhite text-5xl md:text-9xl font-black tracking-tight leading-tight z-10">
            I am xy.
          </h1>
          <div className="flex items-center flex-col md:items-start gap-5 ">
            <h2 className="text-customGrey text-3xl md:text-5xl font-light leading-[1.2] tracking-[-0.015em] z-10">
              The Tech Herald .
            </h2>
            <p className="text-customGrey font-extralight text-sm md:text-md italic leading-normal z-10 text-center md:text-left">
              Fun Fact: My favorite character is Viktor from Arcane! See why.
            </p>
          </div>
          <BackgroundBeams />
        </motion.section>

        <motion.section
          className="flex flex-col gap-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-center align-baseline gap-6 md:gap-28 max-w-[800px] px-4 md:px-0">
            <h1 className="text-customWhite text-3xl md:text-5xl font-bold tracking-tight leading-tight text-center md:text-left">
              My Glorious Projects.
            </h1>
            <div className="flex flex-col justify-end">
              <h2 className="text-customGrey text-lg md:text-xl leading-[1.2] tracking-[-0.015em] text-center md:text-left">
                <span className="italic">
                  &quotWhen you&aposre going to change the world, don&apost ask for
                  permission&quot.
                </span>{" "}
                Hence, my projects.
              </h2>
            </div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
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
                      <CardDescription className="line-clamp-3 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </PinContainer>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="flex flex-col mt-40 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[800px] px-4 md:px-0">
            <h1 className="text-customWhite text-3xl md:text-5xl font-bold text-center">
              Certificates
            </h1>
            <h2 className="text-customGrey text-lg md:text-xl text-center">
              Proof of my skills.
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
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
            {certifications.map((certificate, key) => (
              <motion.div
                key={key}
                className="w-72 mt-12"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <PinContainer
                  href={certificate.link}
                  title={certificate.title}
                  containerClassName="h-72"
                >
                  <Card className="w-64 h-64">
                    <CardHeader className="p-4">
                      <CardTitle className="text-xl md:text-3xl tracking-tight">
                        {certificate.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardDescription className="line-clamp-4 text-sm">
                        {certificate.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </PinContainer>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

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
                <CardTitle className="text-xl md:text-3xl tracking-tight">Coming Soon</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="line-clamp-3 text-sm">It will come soon enough...</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}

