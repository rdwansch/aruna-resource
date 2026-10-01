import { Link } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Article } from '@/types/site'
import { articles } from '@/constants/site-content'
import { ArticleCard, SitePhoto, SectionHeading, formatDate } from '@/shared/site-ui'

export function ArticleDetails({ article }: { article: Article }) {
  return (
    <>
      <header className="article-intro site-container">
        <Link to="/insight" className="text-link">
          <ArrowLeft size={17} aria-hidden="true" /> Kembali ke Insight
        </Link>
        <div className="article-meta">
          <span>{article.category}</span>
          <span>{formatDate(article.date)}</span>
          <span>{article.readTime} baca</span>
        </div>
        <h1 tabIndex={-1}>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="article-byline">
          <span className="byline-mark" aria-hidden="true">
            A
          </span>
          <span>
            Tim editorial ARUNA Resource<small>Artikel demo · rujukan tersedia di bawah</small>
          </span>
        </div>
      </header>
      <div className="site-container">
        <SitePhoto
          image={article.image}
          sizes="(max-width: 1280px) 100vw, 1240px"
          className="article-cover"
        />
      </div>
      <div className="site-container article-layout">
        <aside className="article-toc">
          <p>Dalam artikel ini</p>
          <nav aria-label="Daftar isi artikel">
            {article.sections.map((section, index) => (
              <a key={section.heading} href={`#bagian-${index + 1}`}>
                {section.heading}
              </a>
            ))}
          </nav>
        </aside>
        <article className="prose article-body">
          {article.sections.map((section, index) => (
            <section id={`bagian-${index + 1}`} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="article-sources">
            <h2>Rujukan</h2>
            <ul>
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.title} <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="small-note">
              Sumber internasional digunakan sebagai referensi umum. Artikel ini tidak menetapkan
              prosedur teknis atau kepatuhan hukum untuk kegiatan di Indonesia.
            </p>
          </section>
          <Link to="/insight" className="text-link">
            <ArrowLeft size={18} aria-hidden="true" /> Kembali ke semua artikel
          </Link>
        </article>
      </div>
      <section className="section section-cloud">
        <div className="site-container">
          <SectionHeading label="Bacaan berikutnya" title="Lanjutkan dari topik terkait." />
          <div className="article-grid article-grid-two">
            {articles
              .filter((item) => item.slug !== article.slug)
              .map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
