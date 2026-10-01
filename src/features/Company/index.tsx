import { siteImages } from '@/constants/site-images'
import { Link } from '@tanstack/react-router'
import { ArrowRight, ClipboardCheck, Layers3, Users, FileCheck2 } from 'lucide-react'
import {
  ContactBand,
  SitePhoto,
  PageIntro,
  ProcessDiagram,
  Reveal,
  SectionHeading,
} from '@/shared/site-ui'

export function Company() {
  return (
    <>
      <PageIntro
        section="Perusahaan"
        title="Material punya perjalanan berikutnya."
        description="ARUNA Resource adalah konsep mitra pengelolaan material untuk bisnis. Pendekatan kami dimulai dari memahami kebutuhan, lalu menata setiap tahapnya."
      />
      <section className="section">
        <Reveal className="site-container company-intro">
          <SitePhoto image={siteImages.handover} sizes="(max-width: 960px) 100vw, 50vw" />
          <div>
            <p className="eyebrow">Cara kami melihat material</p>
            <h2>
              Keputusan yang jelas.
              <br />
              Proses yang tertata.
            </h2>
            <p>
              Perangkat yang diganti, material sisa produksi, dan aset akhir pakai membutuhkan
              pendekatan berbeda. Ada kondisi material, keputusan pemilik, serta kebutuhan
              dokumentasi yang perlu dipahami.
            </p>
            <p>
              Dalam konsep ARUNA, semuanya berawal dari satu percakapan. Kami memetakan lingkup
              pekerjaan bersama perusahaan dan menghubungkannya dengan jalur penanganan yang sesuai.
            </p>
            <Link className="text-link" to="/layanan">
              Lihat lingkup layanan <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
      <section className="section section-cloud">
        <Reveal className="site-container vision-grid">
          <div>
            <p className="eyebrow">Visi</p>
            <h2>Pengelolaan material yang menjadi bagian dari keputusan bisnis.</h2>
          </div>
          <div>
            <p className="eyebrow">Misi</p>
            <ul className="statement-list">
              <li>Membantu perusahaan memahami material yang sudah tidak digunakan.</li>
              <li>Menata koordinasi dari perencanaan hingga serah terima.</li>
              <li>Mendukung penilaian penggunaan kembali dan pemulihan material.</li>
              <li>Menjaga informasi dan dokumentasi mudah ditelusuri.</li>
            </ul>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <div className="site-container">
          <SectionHeading label="Prinsip kerja" title="Dasar untuk setiap langkah." />
          <div className="values-grid">
            {[
              {
                Icon: ClipboardCheck,
                title: 'Pahami sebelum bertindak',
                copy: 'Identifikasi jenis, kondisi, dan kebutuhan sebelum menentukan lingkup pekerjaan.',
              },
              {
                Icon: Layers3,
                title: 'Sesuai karakter material',
                copy: 'Pilihan penanganan mengikuti karakteristik material dan kemampuan pihak penerima.',
              },
              {
                Icon: Users,
                title: 'Koordinasi terbuka',
                copy: 'Pemilik material dan pihak terkait memahami peran, keputusan, serta batas pekerjaan.',
              },
              {
                Icon: FileCheck2,
                title: 'Catatan yang dapat ditinjau',
                copy: 'Identitas, jumlah, dan serah terima dicocokkan dengan informasi yang tersedia.',
              },
            ].map(({ Icon, title, copy }) => (
              <Reveal key={title}>
                <div className="value-item">
                  <Icon size={29} strokeWidth={1.4} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <Reveal className="site-container">
          <SectionHeading label="Pendekatan kami" title="Alur terencana, sejak awal." />
          <ProcessDiagram />
          <p className="process-note">
            Profil ini merupakan demo perusahaan fiktif. Fasilitas, perizinan, mitra operasional,
            dan lingkup aktual perlu diverifikasi sebelum website digunakan secara komersial.
          </p>
        </Reveal>
      </section>
      <ContactBand />
    </>
  )
}
