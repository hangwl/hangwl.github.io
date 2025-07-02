import { ReactNode } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";

interface ProjectCardProps {
  title: string;
  description: ReactNode;
  footerIcons?: ReactNode[];
}

export function ProjectCard({ title, description, footerIcons }: ProjectCardProps) {
  const { theme } = useTheme();
  return (
    <MagicCard
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      className="p-0 rounded-lg"
    >
      <div className="p-6">
        <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
        <div className="mt-4 text-base leading-7 text-muted-foreground">{description}</div>
      </div>

      {footerIcons && footerIcons.length > 0 && (
        <div className="border-t p-6">
          <div className="flex gap-3 opacity-80">
            {footerIcons.map((icon, idx) => (
              <span key={idx} className="inline-flex items-center">{icon}</span>
            ))}
          </div>
        </div>
      )}
    </MagicCard>
  );
}
