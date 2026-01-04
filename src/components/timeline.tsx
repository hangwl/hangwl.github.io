import { ReactNode, createRef, useRef } from "react";
import { VerticalAnimatedBeam } from "@/components/magicui/vertical-animated-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { Link } from "@tanstack/react-router";
import { Project } from "@/lib/projects";

interface TimelineProject {
  slug: string;
  title: string;
  description: ReactNode;
  year: number;
  date?: string;
  tags?: string[];
  projectHref: string;
}

interface TimelineItemProps {
  project: TimelineProject;
  index: number;
}

// Helper to convert Project to TimelineProject
function projectToTimelineProject(project: Project): TimelineProject {
  const year = project.date ? new Date(project.date).getFullYear() : new Date().getFullYear();
  
  return {
    slug: project.slug,
    title: project.title,
    description: project.description || '',
    year,
    date: project.date,
    tags: project.tags,
    projectHref: `/projects/${project.slug}`,
  };
}

function TimelineItem({ project }: Omit<TimelineItemProps, 'index'>) {
  const { theme } = useTheme();

  const Wrapper = project.projectHref ? Link : 'div';
  const wrapperProps = project.projectHref
    ? { to: project.projectHref, className: "block" }
    : {};

  return (
    <div className="timeline-item relative mb-8">
      {/* Content Card - centered and overlaying the timeline line */}
      <div className="timeline-content relative z-20 max-w-2xl mx-auto">
        <Wrapper {...wrapperProps}>
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

              {/* Tags/Technologies */}
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {/* {project.links && (
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
              )} */}
            </div>
          </MagicCard>
        </Wrapper>
      </div>
    </div>
  );
}

interface TimelineProps {
  projects: Project[];
}

export function Timeline({ projects }: TimelineProps) {
  // Convert projects to timeline format
  const timelineProjects = projects.map(projectToTimelineProject);
  
  const projectsByYear = timelineProjects.reduce((acc, project) => {
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
                  key={project.slug}
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
          endYOffset={26}
          duration={3}
        />
      ))}
    </div>
  );
}
