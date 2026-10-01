import { Search, ArrowRight } from 'lucide-react'
import { ArticleCard, ContactBand, PageIntro, Reveal } from '@/shared/site-ui'
import { useInsightsManagement } from './hooks/useInsightsManagement'

export function Insights() {
  const insight = useInsightsManagement()
  return (
    <>
      <PageIntro
        section="Insight"
        title="Pahami material. Siapkan keputusan."
        description="Catatan untuk tim operasional, pengadaan, dan IT yang sedang merencanakan pengelolaan material atau aset akhir pakai."
      />
      <section className="section insight-section">
        <div className="site-container">
          <div className="insight-toolbar">
            <fieldset className="filter-list" aria-label="Topik artikel">
              {insight.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => insight.setCategory(category)}
                  aria-pressed={category === insight.category}
                >
                  {category}
                </button>
              ))}
            </fieldset>
            <label className="search-field">
              <Search size={19} aria-hidden="true" />
              <span className="sr-only">Cari artikel</span>
              <input
                type="search"
                value={insight.query}
                onChange={(event) => insight.setQuery(event.target.value)}
                placeholder="Cari artikel…"
              />
            </label>
          </div>
          <output className="result-count">
            {insight.results.length} artikel
            {insight.query.trim() ? ` untuk “${insight.query.trim()}”` : ''}
          </output>
          {insight.results.length > 0 ? (
            <div className="article-grid">
              {insight.results.map((article) => (
                <Reveal key={article.slug}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <Search size={30} strokeWidth={1.4} aria-hidden="true" />
              <h2>Artikel belum ditemukan.</h2>
              <p>Coba kata lain atau tampilkan seluruh topik.</p>
              <button className="text-link" onClick={insight.reset}>
                Tampilkan semua artikel <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
          <p className="scope-note">
            Artikel demo ditulis untuk konteks bisnis dengan rujukan sumber primer. Persyaratan
            lokal dan keputusan teknis perlu ditinjau sesuai material serta lokasi kegiatan.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
