import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import { galleryItems } from '@/constants/site-content'
import type { GalleryCategory } from '@/types/site'

export const galleryFilters = ['Semua', 'Fasilitas', 'Operasional', 'Material'] as const

export function useGalleryManagement() {
  const [category, setCategory] = useState<GalleryCategory | 'Semua'>('Semua')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const items = galleryItems.filter((item) => category === 'Semua' || item.category === category)
  const currentIndex = items.findIndex((item) => item.id === selectedId)
  const selectedItem = items[currentIndex]
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selectedId && !dialog.open) dialog.showModal()
    if (!selectedId && dialog.open) dialog.close()
  }, [selectedId])
  const close = () => setSelectedId(null)
  const move = (direction: number) =>
    setSelectedId(items[(currentIndex + direction + items.length) % items.length].id)
  const filter = (value: GalleryCategory | 'Semua') => {
    close()
    setCategory(value)
  }
  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      move(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      move(1)
    }
  }
  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close()
  }
  return {
    category,
    items,
    selectedItem,
    currentIndex,
    dialogRef,
    open: setSelectedId,
    close,
    move,
    filter,
    onKeyDown,
    onBackdropClick,
  }
}
