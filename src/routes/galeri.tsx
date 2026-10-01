import { createFileRoute } from '@tanstack/react-router'
import { Gallery } from '@/features/Gallery'

export const Route = createFileRoute('/galeri')({
  head: () => ({ meta: [{ title: 'Galeri — ARUNA Resource' }] }),
  component: Gallery,
})
