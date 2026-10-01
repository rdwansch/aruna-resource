import { createFileRoute } from '@tanstack/react-router'
import { services } from '@/constants/site-content'
import { Contact } from '@/features/Contact'

export const Route = createFileRoute('/kontak')({
  validateSearch: (search: Record<string, unknown>): { layanan?: string } => ({
    layanan:
      typeof search.layanan === 'string' &&
      services.some((service) => service.slug === search.layanan)
        ? search.layanan
        : undefined,
  }),
  head: () => ({ meta: [{ title: 'Kontak — ARUNA Resource' }] }),
  component: ContactRoute,
})

function ContactRoute() {
  return <Contact initialService={Route.useSearch().layanan} />
}
