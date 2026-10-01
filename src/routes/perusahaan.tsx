import { createFileRoute } from '@tanstack/react-router'
import { Company } from '@/features/Company'

export const Route = createFileRoute('/perusahaan')({
  head: () => ({ meta: [{ title: 'Perusahaan — ARUNA Resource' }] }),
  component: Company,
})
