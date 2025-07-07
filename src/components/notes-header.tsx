import { HyperText } from "@/components/magicui/hyper-text";
import { ModeToggle } from "@/components/mode-toggle";
import { DocSearch } from '@docsearch/react';
import { cn } from '@/lib/utils';
import { useTOC } from '@/context/toc-context';
import { TableOfContents } from './table-of-contents';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

/**
 * Header variant for the /notes section.
 * It is sticky to keep it visible on scroll.
 */
export default function NotesHeader() {
  const { tocItems } = useTOC();
  const hasTOC = tocItems.length > 0;

  return (
    <header id="notes-header" className={cn(
      "sticky top-0 z-10 w-full px-4 py-2 flex items-center justify-between transition-all duration-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md border-b border-border/40"
    )}>
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <HyperText>hangwl</HyperText>
        <ModeToggle className="rounded-full" />
      </div>
      <div className="flex items-center">
        <DocSearch
          appId="R2IYF7ETH7"
          apiKey="599cec31baffa4868cae4e79f180729b"
          indexName="docsearch"
        />
        {hasTOC && (
          <div className="lg:hidden ml-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-hidden flex flex-col">
                <DialogHeader>
                  <DialogTitle>Table of Contents</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto">
                  <TableOfContents items={tocItems} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </header>
  );
}
