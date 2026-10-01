import { Link } from '@tanstack/react-router'
import { ArrowRight, Check, FileCheck2 } from 'lucide-react'
import type { Service } from '@/types/site'
import { services } from '@/constants/site-content'
import { ContactBand, SitePhoto, Reveal, SectionHeading, ServiceCard } from '@/shared/site-ui'

export function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      <section className="page-intro">
        <div className="site-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/layanan">Layanan</Link>
            <span>/</span>
            <span>{service.shortTitle}</span>
          </nav>
          <h1 tabIndex={-1}>{service.title}</h1>
          <p>{service.summary}</p>
        </div>
      </section>
      <section className="section detail-section">
        <div className="site-container service-detail-grid">
          <div>
            <SitePhoto
              image={service.image}
              sizes="(max-width: 960px) 100vw, 65vw"
              className="service-detail-media"
            />
            <div className="prose service-description">
              <h2>Rencana sesuai kebutuhan Anda.</h2>
              <p>{service.description}</p>
              <h2>Lingkup yang dapat dibahas</h2>
              <ul className="check-list">
                {service.items.map((item) => (
                  <li key={item}>
                    <Check size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="service-sidebar">
            <FileCheck2 size={31} strokeWidth={1.4} aria-hidden="true" />
            <h2>Dokumentasi & keluaran</h2>
            <p>Catatan disepakati sesuai lingkup pekerjaan.</p>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button" to="/kontak" search={{ layanan: service.slug }}>
              Bahas kebutuhan ini <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <p className="small-note">
              Konsep layanan. Metode, pihak penerima, dan persyaratan aktual perlu ditinjau sebelum
              pekerjaan berjalan.
            </p>
          </aside>
        </div>
      </section>
      <section className="section section-cloud">
        <div className="site-container">
          <SectionHeading label="Layanan lainnya" title="Kebutuhan Anda saling terhubung." />
          <div className="service-grid">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 2)
              .map((item) => (
                <Reveal key={item.slug}>
                  <ServiceCard service={item} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
