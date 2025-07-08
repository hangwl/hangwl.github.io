import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <GridPattern
        width={80}
        height={80}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
        )}
      />
    </div>
  );
}
