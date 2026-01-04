import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ThemeProvider } from "@/components/theme-provider";
import { TOCProvider } from '@/context/toc-context';
import { BackgroundGrid } from "@/components/background-grid";
import Header from "@/components/header";
import { AppDock } from '@/components/dock';
import { Suspense } from 'react';
import { RouteErrorBoundary } from '@/components/route-error-boundary';
import { RouteLoader } from '@/components/page-loader';

function RootComponent() {
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
          <Suspense fallback={<RouteLoader />}>
            <Outlet />
          </Suspense>
          <TanStackRouterDevtools />
        </>
      </TOCProvider>
    </ThemeProvider>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "hangwl's digital gallery - AI/ML projects and technical notes" },
      { property: "og:title", content: "hangwl's digital gallery" },
      { property: "og:description", content: "hangwl's digital gallery - AI/ML projects and technical notes" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hangwl.github.io" },
      { property: "og:image", content: "https://hangwl.github.io/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "hangwl's digital gallery" },
      { name: "twitter:description", content: "hangwl's digital gallery - AI/ML projects and technical notes" },
      { name: "twitter:image", content: "https://hangwl.github.io/twitter-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://hangwl.github.io/" },
    ],
    title: "hangwl's digital gallery",
  }),
  errorComponent: RouteErrorBoundary,
  component: RootComponent,
})