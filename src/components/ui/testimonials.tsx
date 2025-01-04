"use client"
import { AnimatedTestimonials } from "./animated-testimonials";

export default function Testimonials(){
    const testimonials = [
        {
            name: "Alpha Romer Coma",
            occupation: "AI Engineer and GitHub Campus Expert",
            quote: 
                "His enthusiasm for mastering new technologies like Java, Back-End Development, Git/GitHub, Cloud Computing, and other software development skills, along with his drive for empowering others, showcases his capabilities as a tech leader and mentor.",
            src: "/alpha.jpg"
        },
        {
            name: "Justine Jude Pura",
            occupation: "Master of Business Administration, Computer Science Professor",
            quote:
                "One of Xynil's notable strengths is his proficiency in project development,particularly in utilizing GitHub for effective collaboration within his team.",
            src: "/jude.jpg"
        },
        {
            name: "Jennefer Sabonsolin",
            occupation: "Machine Learning Researcher",
            quote:
                "He possesses a high level of expertise in programming.",
            src: "/jen.jpg"
                
        },
        {
            name: "Kristoffer Ian Sioson",
            occupation: "Software Engineer",
            quote:
                "His strength in the field (Computer Science) was defined by his many contributions. I genuinely recommend Xynil to because of his enthusiasm for self-improvement, which makes him an invaluable asset to any endeavor.",
            src: "/ian.jpg"
            
        }
    ]
    return(
            <AnimatedTestimonials testimonials={testimonials} />
    );
}