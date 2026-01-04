import { createFileRoute } from '@tanstack/react-router'
import { BlurFade } from "@/components/magicui/blur-fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLayoutEffect } from "react";
import { Timeline } from "@/components/timeline";
import { getFeaturedProjects } from "@/lib/projects";
import { SkeletonTimeline } from "@/components/skeleton-loader";
import { DEFAULT_SEO } from "@/lib/seo";

export const Route = createFileRoute('/')({
  loader: getFeaturedProjects,
  head: () => DEFAULT_SEO,
  component: App,
  pendingComponent: () => (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <SkeletonTimeline items={3} />
    </div>
  ),
})

function App() {
  const projects = Route.useLoaderData();
  
  useLayoutEffect(() => {
    document.title = "home | hangwl's digital gallery";

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create smooth scrolling
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // Animate sections on scroll
    const sections = gsap.utils.toArray<HTMLElement>(".animate-on-scroll");
    sections.forEach((section) => {
      gsap.fromTo(section,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      smoother.kill();
    };
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <main id="smooth-content">
          <section id="hero" className="scroll-section h-screen flex flex-col justify-center items-center text-center gap-4 animate-on-scroll">
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hello 👋
              </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
                Welcome to my digital gallery!
              </span>
            </BlurFade>
          </section>
          <section id="about" className="scroll-section min-h-screen py-20 w-full flex flex-col justify-center items-center bg-background/50 border-t animate-on-scroll">
          <div className="max-w-2xl w-full px-4">
            <h3 className="text-2xl font-semibold tracking-tight mb-4">About Me</h3>

            <p className="leading-7 [&:not(:first-child)]:mb-4">
              My friends call me <b>Hang</b>.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mb-4">
              
            </p>
            <p className="leading-7 [&:not(:first-child)]:mb-4">
              I am a Batch 17 graduate from the AI Apprenticeship program hosted by NUS in{' '}
              <a href="https://aisingapore.org/" target="_blank" rel="noopener noreferrer">
                AI Singapore
              </a>.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mb-4">
              As someone who is deeply interested in machine learning applications, I enjoy exploring opportunities where I can apply my expertise and contribute to the growing AI ecosystem.
            </p>
          </div>
          </section>
          <section id="projects" className="scroll-section min-h-screen py-20 w-full flex flex-col justify-center items-center border-t animate-on-scroll">
            <div className="max-w-2xl w-full">
              <h3 className="text-2xl font-semibold tracking-tight mb-4 text-center">Projects</h3>
              <div className="space-y-6">
                <Timeline projects={projects} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
