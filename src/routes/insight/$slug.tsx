import { createFileRoute, notFound } from '@tanstack/react-router'
import { articles } from '@/constants/site-content'
import { ArticleDetails } from '@/features/ArticleDetails'

export const Route = createFileRoute('/insight/$slug')({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug)
    if (!article) throw notFound()
    return article
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? 'Halaman tidak ditemukan'} — ARUNA Resource` }],
  }),
  component: DetailRoute,
})

function DetailRoute() {
  return <ArticleDetails article={Route.useLoaderData()} />
}
