import type { ReactNode } from 'react'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ClientSiteShell } from '@/layout/SiteShell'
import { ContentLoading } from '@/shared/ContentLoading'
import { ErrorComponent } from '@/shared/ErrorComponent'
import { NotFoundPage } from '@/shared/site-ui'
import stylesheet from '@/styles.css?url'

export const Route = createRootRoute({
  ssr: false,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'ARUNA Resource' },
      { name: 'theme-color', content: '#112c40' },
      {
        name: 'description',
        content:
          'Konsep pengelolaan limbah elektronik, material industri, disposal aset, dan pemulihan material untuk bisnis.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: stylesheet },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  component: ClientSiteShell,
  pendingComponent: ContentLoading,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-left" />}
        <Scripts />
      </body>
    </html>
  )
}
