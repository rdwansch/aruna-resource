import { createFileRoute } from '@tanstack/react-router'
import { Insights } from '@/features/Insights'

export const Route = createFileRoute('/insight/')({
  head: () => ({ meta: [{ title: 'Insight — ARUNA Resource' }] }),
  component: Insights,
})
