export type ServiceIcon = 'Laptop' | 'Factory' | 'PackageX' | 'Recycle'

export type SiteImage = {
  src: string
  alt: string
}

export type Service = {
  slug: string
  title: string
  shortTitle: string
  category: string
  summary: string
  description: string
  items: string[]
  deliverables: string[]
  image: SiteImage
  icon: ServiceIcon
}

export type ArticleSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
  image: SiteImage
  sections: ArticleSection[]
  sources: { title: string; url: string }[]
}

export type GalleryCategory = 'Fasilitas' | 'Operasional' | 'Material'

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  description: string
  image: SiteImage
}

export type ProcessStep = {
  title: string
  description: string
  icon: 'ClipboardCheck' | 'Truck' | 'Layers3' | 'Settings2' | 'FileCheck2'
}
