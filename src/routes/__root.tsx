import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ThemeProvider } from "@/components/theme-provider";
import { TOCProvider } from '@/context/toc-context';
import { BackgroundGrid } from "@/components/background-grid";
import Header from "@/components/header";
import { AppDock } from '@/components/dock';
import { Suspense } from 'react';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "A brief, keyword-rich description of your site." },
      { property: "og:title", content: "Your Site Title" },
      { property: "og:description", content: "A brief, keyword-rich description of your site." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://yourdomain.com" },
      { property: "og:image", content: "https://yourdomain.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Your Site Title" },
      { name: "twitter:description", content: "A brief, keyword-rich description of your site." },
      { name: "twitter:image", content: "https://yourdomain.com/twitter-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://yourdomain.com/" },
    ],
    title: "Your Site Title",
  }),
  component: () => {
    const pathname = useRouterState({ select: (s) => s.location.pathname })
    const isNotes = pathname.startsWith('/notes')
    const isImmersive = pathname.startsWith('/lab/snake-3d')

    return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TOCProvider>
        <>
        {!isNotes && !isImmersive && <Header />}
        {!isImmersive && <BackgroundGrid />}
        {!isImmersive && <AppDock />}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <TanStackRouterDevtools />
        </>
      </TOCProvider>
    </ThemeProvider>
    )
  }
})