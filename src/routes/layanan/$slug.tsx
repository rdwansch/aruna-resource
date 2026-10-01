import { createFileRoute, notFound } from '@tanstack/react-router'
import { services } from '@/constants/site-content'
import { ServiceDetails } from '@/features/ServiceDetails'

export const Route = createFileRoute('/layanan/$slug')({
  loader: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? 'Halaman tidak ditemukan'} — ARUNA Resource` }],
  }),
  component: DetailRoute,
})

function DetailRoute() {
  return <ServiceDetails service={Route.useLoaderData()} />
}
