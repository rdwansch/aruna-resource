import { siteImages } from '@/constants/site-images'
import { ArrowRight, Building2, FileCheck2, Mail, MapPin, Check } from 'lucide-react'
import { services } from '@/constants/site-content'
import { SitePhoto, PageIntro } from '@/shared/site-ui'
import { useContactManagement } from './hooks/useContactManagement'

export function Contact({ initialService = '' }: { initialService?: string }) {
  const { preview, formRef, previewRef, submit, clearValidation, reset, edit } =
    useContactManagement()
  return (
    <>
      <PageIntro
        section="Kontak"
        title="Mulai dengan kebutuhan Anda."
        description="Jenis material, lokasi, dan perkiraan jumlah membantu menyusun percakapan awal. Siapkan informasi yang sudah tersedia; detail lain bisa dibahas bersama."
      />
      <section className="section contact-section">
        <div className="site-container contact-grid">
          <aside className="contact-information">
            <p className="eyebrow">ARUNA Resource</p>
            <h2>
              Mari susun
              <br />
              langkah berikutnya.
            </h2>
            <p>
              Untuk kebutuhan pengelolaan material perusahaan, mulai dari informasi dasar dan tujuan
              penanganannya.
            </p>
            <dl className="contact-list">
              <div>
                <Mail size={21} strokeWidth={1.5} aria-hidden="true" />
                <dt>Email contoh</dt>
                <dd>halo@aruna-resource.example</dd>
              </div>
              <div>
                <MapPin size={21} strokeWidth={1.5} aria-hidden="true" />
                <dt>Lokasi contoh</dt>
                <dd>Jakarta, Indonesia</dd>
              </div>
              <div>
                <Building2 size={21} strokeWidth={1.5} aria-hidden="true" />
                <dt>Tim terkait</dt>
                <dd>Operasional, pengadaan, dan pengelolaan aset</dd>
              </div>
            </dl>
            <div className="contact-demo-note">
              <FileCheck2 size={21} aria-hidden="true" />
              <p>
                Website demo. Informasi kontak masih contoh; form hanya menampilkan pratinjau lokal.
              </p>
            </div>
          </aside>
          <div className="contact-form-panel">
            <form ref={formRef} onSubmit={submit} onInput={clearValidation} hidden={!!preview}>
              <h2>Ceritakan kebutuhan perusahaan</h2>
              <p className="form-description">
                Kolom bertanda * wajib diisi. Data tidak dikirim atau disimpan.
              </p>
              <div className="form-grid">
                <label>
                  Nama lengkap *
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Nama Anda"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Perusahaan *
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Nama perusahaan"
                    required
                    maxLength={150}
                  />
                </label>
                <label>
                  Email kerja *
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@perusahaan.co.id"
                    required
                    maxLength={150}
                  />
                </label>
                <label>
                  Telepon <span className="optional-label">(opsional)</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Nomor yang dapat dihubungi"
                    maxLength={30}
                  />
                </label>
                <label className="form-full">
                  Lingkup layanan *
                  <select name="service" defaultValue={initialService} required>
                    <option value="" disabled>
                      Pilih layanan
                    </option>
                    {services.map((service) => (
                      <option value={service.slug} key={service.slug}>
                        {service.shortTitle}
                      </option>
                    ))}
                    <option value="konsultasi">Belum yakin, perlu dibahas</option>
                  </select>
                </label>
                <label className="form-full">
                  Kebutuhan Anda *
                  <textarea
                    name="message"
                    rows={5}
                    required
                    maxLength={3000}
                    placeholder="Jenis material, perkiraan jumlah, lokasi, dan target waktu."
                  />
                </label>
              </div>
              <button className="button" type="submit">
                Tinjau kebutuhan <ArrowRight size={18} aria-hidden="true" />
              </button>
              <p className="small-note">
                Pratinjau membantu meninjau isi form. Tidak ada pesan yang dikirim.
              </p>
            </form>
            {preview && (
              <div className="contact-preview">
                <Check size={33} strokeWidth={1.6} aria-hidden="true" />
                <h2 ref={previewRef} tabIndex={-1}>
                  Pratinjau kebutuhan Anda
                </h2>
                <output className="preview-notice">
                  Belum dikirim. Ini hanya pratinjau lokal dari form demo.
                </output>
                <dl>
                  <div>
                    <dt>Nama / perusahaan</dt>
                    <dd>
                      {preview.name}
                      <br />
                      {preview.company}
                    </dd>
                  </div>
                  <div>
                    <dt>Email / telepon</dt>
                    <dd>
                      {preview.email}
                      {preview.phone && (
                        <>
                          <br />
                          {preview.phone}
                        </>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt>Layanan</dt>
                    <dd>
                      {services.find((service) => service.slug === preview?.service)?.shortTitle ??
                        'Perlu dibahas'}
                    </dd>
                  </div>
                  <div>
                    <dt>Kebutuhan</dt>
                    <dd className="preview-message">{preview.message}</dd>
                  </div>
                </dl>
                <div className="button-row">
                  <button className="button" onClick={edit}>
                    Ubah data
                  </button>
                  <button className="button button-outline" onClick={reset}>
                    Kosongkan form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="site-container contact-location">
        <SitePhoto image={siteImages.office} sizes="(max-width: 1280px) 100vw, 1240px" />
      </div>
    </>
  )
}
