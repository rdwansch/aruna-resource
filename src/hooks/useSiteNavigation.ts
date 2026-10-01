import { useEffect, useRef, useState } from 'react'
import { useRouter, useRouterState } from '@tanstack/react-router'

export function useSiteNavigation() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const status = useRouterState({ select: (state) => state.status })
  const menuButton = useRef<HTMLButtonElement>(null)
  const previousPath = useRef(pathname)
  useEffect(() => {
    if (status !== 'idle') return
    if (previousPath.current !== pathname)
      document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true })
    previousPath.current = pathname
  }, [pathname, status])
  useEffect(() => router.subscribe('onBeforeNavigate', () => setMenuOpen(false)), [router])
  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [menuOpen])
  return { menuOpen, menuButton, toggleMenu: () => setMenuOpen(!menuOpen) }
}
