import { createFileRoute } from '@tanstack/react-router'
import { Services } from '@/features/Services'

export const Route = createFileRoute('/layanan/')({
  head: () => ({ meta: [{ title: 'Layanan — ARUNA Resource' }] }),
  component: Services,
})
