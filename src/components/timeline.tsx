import { ReactNode, createRef, useRef } from "react";
import { VerticalAnimatedBeam } from "@/components/magicui/vertical-animated-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";

interface TimelineProject {
  id: string;
  title: string;
  description: ReactNode;
  year: number;
  date?: string;
  technologies?: string[];
  links?: {
    homepage?: string;
    github?: string;
    demo?: string;
  };
}

interface TimelineItemProps {
  project: TimelineProject;
  index: number;
}

const Projects: TimelineProject[] = [
  {
    id: "1",
    title: "Aquarium",
    description: "Aquarium is a community-driven platform aimed at addressing data scarcity and increasing language representation within Southeast Asia. It features an assistive chatbot focused on increasing data accessibility to the public. The data that powers Aquarium is the product of AI-integrated data processing pipelines.",
    year: 2025,
    date: "June 2025",
    technologies: ["Next.js", "LangGraph", "Python", "FastAPI", "PostgreSQL"],
    links: {
      homepage: "https://aquarium.sea-lion.ai/",
    }
  },
  {
    id: "2",
    title: "Bayesian Thompson Sampling Demo",
    description: "A Streamlit application that demonstrates how Bayesian Thompson Sampling can be used to optimize model selection to address model drift.",
    year: 2024,
    date: "Sept 2024",
    technologies: ["Streamlit", "Python", "Bayesian A/B Testing"],
    links: {
      github: "https://github.com/hangwl/thompson_sampling_demo"
    }
  },
  {
    id: "3",
    title: "Game Contributions Extractor",
    description: "A guild contributions extractor project that uses PaddleOCR to extract game contributions from Maplestory screenshots and fuzzy string matching to match incomplete IGNs. Images were segmented through the analysis of pixel variances.",
    year: 2023,
    date: "Jul 2023",
    technologies: ["Python", "PaddleOCR", "Fuzzy String Matching"],
    links: {
      github: "https://github.com/hangwl/MaplestoryOCR"
    }
  }
];

function TimelineItem({ project }: Omit<TimelineItemProps, 'index'>) {
  const { theme } = useTheme();
  
  return (
    <div className="timeline-item relative mb-8">
      {/* Content Card - centered and overlaying the timeline line */}
            <div className="timeline-content relative z-20 max-w-2xl mx-auto">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-0 rounded-lg"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold tracking-tight">{project.title}</h4>
              <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">
                {project.date || project.year}
              </span>
            </div>
            <div className="text-base leading-7 text-muted-foreground mb-4">
              {project.description}
            </div>
            
            {/* Technologies */}
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            {/* Links */}
            {project.links && (
              <div className="flex gap-3">
                {project.links.github && (
                  <a 
                    href={project.links.github}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {project.links.demo && (
                  <a 
                    href={project.links.demo}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
                {project.links.homepage && (
                  <a 
                    href={project.links.homepage}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Homepage →
                  </a>
                )}
              </div>
            )}
          </div>
        </MagicCard>
      </div>
    </div>
  );
}

export function Timeline() {
  const projectsByYear = Projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<number, TimelineProject[]>);

  const currentYear = new Date().getFullYear();
  if (!projectsByYear[currentYear]) {
    projectsByYear[currentYear] = [];
  }

  const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);

  const containerRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  yearRefs.current = years.map(
    (_, i) => yearRefs.current[i] ?? createRef<HTMLDivElement>(),
  );

  return (
    <div ref={containerRef} className="timeline-container relative max-w-4xl mx-auto py-8">
      {/* Timeline Items */}
      <div className="timeline-items relative min-h-full">
        {years.map((year, index) => (
          <div key={year} className="year-section mb-16">
            {/* Projects for this year */}
            <div className="space-y-8 mb-12">
              {projectsByYear[year].map((project) => (
                <TimelineItem 
                  key={project.id} 
                  project={project}
                />
              ))}
            </div>

            {/* Year Header */}
            <div className="year-header relative flex justify-center">
              {/* Year label */}
              <div ref={yearRefs.current[index]} className="bg-background border border-border px-6 py-3 rounded-full relative z-20 shadow-sm">
                <h3 className="text-lg font-semibold">{year}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Beams (bottom-to-top) */}
      {years.slice(1).map((_, index) => (
        <VerticalAnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={yearRefs.current[index + 1]} // bottom year header
          toRef={yearRefs.current[index]}       // top year header
          className="z-10"
          startYOffset={26}
          endYOffset={-100}
          duration={3}
        />
      ))}
    </div>
  );
}
