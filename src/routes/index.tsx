import { createFileRoute } from '@tanstack/react-router'
import { BlurFade } from "@/components/magicui/blur-fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLayoutEffect } from "react";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create smooth scrolling
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });


    // Animate sections on scroll
    gsap.utils.toArray(".animate-on-scroll").forEach((section: any) => {
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
        <div id="smooth-content">
          <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center gap-4"
          >
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hello 👋
              </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
                Nice to meet you
              </span>
            </BlurFade>
          </section>
          <section id="about" className="animate-on-scroll min-h-screen py-20 w-full flex flex-col justify-center items-center bg-background/50">
            <div className="max-w-2xl w-full px-4">
              <h3 className="text-2xl font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">This is a placeholder for your about section. Tell your story here.</p>
            </div>
          </section>
          <section id="projects" className="animate-on-scroll min-h-screen py-20 w-full flex flex-col justify-center items-center">
            <div className="max-w-2xl w-full px-4">
              <h3 className="text-2xl font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground">Showcase your projects here.</p>
            </div>
          </section>
          <section id="contact" className="animate-on-scroll min-h-screen py-20 w-full flex flex-col justify-center items-center bg-background/50">
            <div className="max-w-2xl w-full px-4">
              <h3 className="text-2xl font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">Add your contact form or details here.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
