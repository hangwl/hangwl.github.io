import { TableOfContents } from "@/components/table-of-contents";
import { useTOC } from "@/context/toc-context";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function NoteLayout({ children }: PropsWithChildren) {
  const { tocItems } = useTOC();
  const hasTOC = tocItems.length > 0;

  return (
    <div className="px-6 pt-5 pb-24">
      <div
        className={cn(
          "grid gap-8 mx-auto",
          hasTOC
            ? "lg:grid-cols-[1fr_240px] max-w-7xl"
            : "max-w-4xl"
        )}
      >
        {/* Main Content */}
        <main className="min-w-0">{children}</main>

        {/* Right Sidebar - Table of Contents */}
        {hasTOC && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents
                items={tocItems}
                className="max-h-[calc(100vh-7rem)]"
              />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
