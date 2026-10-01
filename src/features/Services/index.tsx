import { services } from '@/constants/site-content'
import {
  ContactBand,
  PageIntro,
  ProcessDiagram,
  Reveal,
  SectionHeading,
  ServiceCard,
} from '@/shared/site-ui'

export function Services() {
  return (
    <>
      <PageIntro
        section="Layanan"
        title="Mulai dari jenis materialnya."
        description="Empat lingkup untuk kebutuhan perusahaan: perangkat elektronik, material industri, aset akhir pakai, dan material yang berpotensi dipulihkan."
      />
      <section className="section services-list-section">
        <div className="site-container">
          <div className="service-grid">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <p className="scope-note">
            Lingkup layanan dalam demo ini bersifat ilustratif. Penanganan material B3,
            pengangkutan, dan pihak penerima memerlukan verifikasi kewenangan serta persyaratan yang
            berlaku.
          </p>
        </div>
      </section>
      <section className="section process-section">
        <Reveal className="site-container">
          <SectionHeading
            label="Alur kerja"
            title="Lingkup disepakati. Tahapan dicatat."
            description="Setiap layanan mengikuti rencana yang menyesuaikan kondisi material dan kebutuhan perusahaan."
          />
          <ProcessDiagram />
        </Reveal>
      </section>
      <ContactBand />
    </>
  )
}
