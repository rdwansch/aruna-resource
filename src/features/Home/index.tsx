import { siteImages } from '@/constants/site-images'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Factory, FileCheck2, Laptop, PackageX } from 'lucide-react'
import { articles, galleryItems, partners, services } from '@/constants/site-content'
import {
  ArticleCard,
  ContactBand,
  SitePhoto,
  ProcessDiagram,
  Reveal,
  SectionHeading,
  ServiceCard,
} from '@/shared/site-ui'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <h1 tabIndex={-1}>
              Kelola limbah.
              <br />
              <span>
                Kembalikan
                <br />
                nilai material.
              </span>
            </h1>
            <p>
              Pengelolaan limbah elektronik, material industri, dan disposal aset. Dari identifikasi
              awal hingga dokumentasi akhir.
            </p>
            <div className="button-row">
              <Link to="/kontak" className="button">
                Diskusikan kebutuhan <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/layanan" className="text-link">
                Jelajahi layanan <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="hero-line" aria-hidden="true" />
              <p>
                Langkah terencana untuk material
                <br />
                yang sudah tidak terpakai.
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <SitePhoto
              image={siteImages.facility}
              sizes="(max-width: 960px) 100vw, 50vw"
              priority
            />
            <div className="hero-caption">
              <span>ARUNA RESOURCE</span>
              <p>
                Material hari ini.
                <br />
                Sumber daya berikutnya.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="scope-strip">
        <div className="site-container scope-grid">
          {[
            { Icon: Laptop, title: 'Elektronik', description: 'Perangkat & komponen' },
            { Icon: Factory, title: 'Industri', description: 'Material B3 & non-B3' },
            { Icon: PackageX, title: 'Aset & produk', description: 'Disposal & barang reject' },
            { Icon: FileCheck2, title: 'Dokumentasi', description: 'Catatan setiap tahapan' },
          ].map(({ Icon, title, description }) => (
            <div key={title}>
              <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <span>
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
      <section className="section">
        <Reveal className="site-container about-grid">
          <div className="about-image">
            <SitePhoto image={siteImages.team} sizes="(max-width: 960px) 100vw, 50vw" />
            <div className="image-caption">
              <span>Fokus kami</span>
              <strong>
                Menata alur material,
                <br />
                dari awal sampai akhir.
              </strong>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Tentang ARUNA</p>
            <h2>
              Satu titik koordinasi.
              <br />
              Setiap tahap lebih jelas.
            </h2>
            <p>
              Material yang sudah tidak terpakai membutuhkan keputusan yang tepat. Jenisnya perlu
              dikenali, alurnya direncanakan, dan penanganannya dicatat.
            </p>
            <p>
              ARUNA Resource menghubungkan kebutuhan tersebut dalam pendekatan pengelolaan yang
              terstruktur untuk bisnis dan industri.
            </p>
            <Link to="/perusahaan" className="text-link">
              Kenali perusahaan <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
      <section className="section section-cloud">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              label="Layanan kami"
              title="Sesuai material. Sesuai kebutuhan."
              description="Empat lingkup layanan untuk membantu perusahaan merencanakan pengelolaan materialnya."
            >
              <Link to="/layanan" className="text-link">
                Semua layanan <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </SectionHeading>
          </Reveal>
          <div className="service-grid">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <Reveal className="site-container">
          <SectionHeading
            label="Alur pengelolaan"
            title="Dari identifikasi hingga dokumentasi."
            description="Gambaran tahapan dari memahami kebutuhan hingga merangkum hasil penanganan."
          />
          <ProcessDiagram />
          <p className="process-note">
            Alur ilustratif. Tahapan aktual menyesuaikan jenis material, hasil asesmen, dan
            persyaratan yang berlaku.
          </p>
        </Reveal>
      </section>
      <section className="section">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              label="Galeri"
              title="Lebih dekat dengan prosesnya."
              description="Gambaran area kerja, aktivitas, dan material yang menjadi bagian dari pengelolaan."
            >
              <Link to="/galeri" className="text-link">
                Jelajahi galeri <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </SectionHeading>
          </Reveal>
          <Reveal className="home-gallery">
            {galleryItems.slice(0, 3).map((item) => (
              <Link to="/galeri" className="home-gallery-item" key={item.id}>
                <SitePhoto image={item.image} />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <ArrowRight size={20} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="partners-section">
        <Reveal className="site-container">
          <div className="partners-heading">
            <h2>Kolaborasi dalam pengelolaan material.</h2>
            <p>Contoh mitra dalam konsep website ini. Seluruh nama bersifat fiktif.</p>
          </div>
          <div className="partner-grid">
            {partners.map((partner, index) => (
              <div key={partner} className={`partner-wordmark partner-${index}`}>
                <span className="partner-symbol" aria-hidden="true">
                  {index === 0 ? (
                    <Factory size={26} strokeWidth={1.4} />
                  ) : index === 1 ? (
                    <span className="partner-bars" />
                  ) : index === 2 ? (
                    <PackageX size={27} strokeWidth={1.4} />
                  ) : (
                    <span className="partner-square" />
                  )}
                </span>
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section section-cloud">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              label="Insight"
              title="Bekal untuk keputusan yang tepat."
              description="Catatan praktis seputar limbah elektronik, pengelolaan aset, dan pemulihan material."
            >
              <Link to="/insight" className="text-link">
                Semua artikel <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </SectionHeading>
          </Reveal>
          <div className="article-grid">
            {articles.map((article) => (
              <Reveal key={article.slug}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
