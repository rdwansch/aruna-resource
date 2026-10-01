import { useState } from 'react'
import { articles } from '@/constants/site-content'

export function useInsightsManagement() {
  const [category, setCategory] = useState('Semua')
  const [query, setQuery] = useState('')
  const categories = ['Semua', ...new Set(articles.map((article) => article.category))]
  const normalizedQuery = query.trim().toLocaleLowerCase('id')
  const results = articles.filter(
    (article) =>
      (category === 'Semua' || category === article.category) &&
      `${article.title} ${article.excerpt}`.toLocaleLowerCase('id').includes(normalizedQuery),
  )
  return {
    category,
    setCategory,
    query,
    setQuery,
    categories,
    results,
    reset: () => {
      setCategory('Semua')
      setQuery('')
    },
  }
}
