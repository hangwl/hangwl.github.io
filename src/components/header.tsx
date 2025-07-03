import { HyperText } from "@/components/magicui/hyper-text";
import { ModeToggle } from "@/components/mode-toggle";
import { DocSearch } from '@docsearch/react';
import { useRouter } from '@tanstack/react-router';
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

export default function Header() {
  const router = useRouter()
  const { tocItems } = useTOC();
  const currentPath = router.state.location.pathname
  const isProjectPage = currentPath.startsWith('/projects/')
  const hasTOC = tocItems.length > 0;
  
  return (
    <header id="main-header" className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-2 transition-all duration-200",
      isProjectPage 
        ? "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md border-b border-border/40" 
        : "bg-transparent"
    )}>
      <div className="flex items-center gap-4">
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
