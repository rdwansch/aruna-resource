import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Laptop,
  Layers3,
  PackageX,
  Recycle,
  Settings2,
  Truck,
} from 'lucide-react'
import { processSteps } from '@/constants/site-content'
import type { Article, Service, SiteImage } from '@/types/site'
import { usePageTitle } from '@/hooks/usePageTitle'

export const icons = {
  Laptop,
  Factory,
  PackageX,
  Recycle,
  ClipboardCheck,
  Truck,
  Layers3,
  Settings2,
  FileCheck2,
}

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand ${inverse ? 'brand-inverse' : ''}`}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M4 40 21 7h8L12 40Z" fill="currentColor" />
        <path d="m26 22 7-14 12 32H34l-6-16Z" fill="currentColor" />
        <path d="m15 35 5-10h8l4 10Z" fill="#35a576" />
      </svg>
      <span>
        <strong>ARUNA</strong>
        <span>RESOURCE</span>
      </span>
    </span>
  )
}

export function SitePhoto({
  image,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw',
  priority = false,
}: {
  image: SiteImage
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div className={`site-photo ${className}`}>
      <img
        src={image.src}
        srcSet={`${image.src.replace('-1600', '-640')} 640w, ${image.src} 1600w`}
        sizes={sizes}
        alt={image.alt}
        width={1600}
        height={1067}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  )
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    if (
      !element ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return
    element.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export function SectionHeading({
  label,
  title,
  description,
  children,
}: {
  label: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </div>
  )
}

export function PageIntro({
  section,
  title,
  description,
}: {
  section: string
  title: string
  description: string
}) {
  return (
    <section className="page-intro">
      <div className="site-container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <span>{section}</span>
        </nav>
        <h1 tabIndex={-1}>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]
  return (
    <Link to="/layanan/$slug" params={{ slug: service.slug }} className="service-card">
      <div className="service-card-top">
        <Icon size={32} strokeWidth={1.4} aria-hidden="true" />
        <ArrowRight size={23} strokeWidth={1.6} aria-hidden="true" />
      </div>
      <p className="card-category">{service.category}</p>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <span className="card-link">Lihat layanan</span>
    </Link>
  )
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to="/insight/$slug" params={{ slug: article.slug }} className="article-card">
      <SitePhoto image={article.image} />
      <div className="article-card-body">
        <div className="article-meta">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <span className="text-link">
          Baca artikel <ArrowRight size={18} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export function ProcessDiagram() {
  return (
    <ol className="process-diagram">
      {processSteps.map((step, index) => {
        const Icon = icons[step.icon]
        return (
          <li key={step.title}>
            <div className="process-node">
              <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        )
      })}
    </ol>
  )
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="site-container contact-band-inner">
        <div>
          <p className="eyebrow">Mulai dari kebutuhan Anda</p>
          <h2>
            Material berbeda.
            <br />
            Pendekatan yang tepat.
          </h2>
          <p>Ceritakan jenis material, lokasi, dan kebutuhan perusahaan Anda.</p>
        </div>
        <Link to="/kontak" className="button button-white">
          Diskusikan kebutuhan <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export function NotFoundPage() {
  usePageTitle('Halaman tidak ditemukan')
  return (
    <section className="not-found site-container">
      <p className="eyebrow">404</p>
      <h1 tabIndex={-1}>Halaman tidak ditemukan.</h1>
      <p>
        Alamat ini tidak tersedia. Temukan informasi melalui halaman beranda atau daftar layanan.
      </p>
      <div className="button-row">
        <Link to="/" className="button">
          Kembali ke beranda <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <Link to="/layanan" className="button button-outline">
          Lihat layanan
        </Link>
      </div>
    </section>
  )
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}
