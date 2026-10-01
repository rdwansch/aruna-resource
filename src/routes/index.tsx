import { createFileRoute } from '@tanstack/react-router'
import { Home } from '@/features/Home'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: 'Pengelolaan material untuk bisnis — ARUNA Resource' }] }),
  component: Home,
})
