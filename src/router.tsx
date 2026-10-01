import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ContentLoading } from '@/shared/ContentLoading'
import { ErrorComponent } from '@/shared/ErrorComponent'

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPendingComponent: ContentLoading,
    defaultErrorComponent: ErrorComponent,
    defaultPendingMinMs: 0,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
