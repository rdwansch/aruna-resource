/* oxlint-disable jsx-a11y/no-noninteractive-element-interactions -- Native dialog supports keyboard navigation and backdrop dismissal. */
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react'
import { SitePhoto, PageIntro, Reveal } from '@/shared/site-ui'
import { galleryFilters, useGalleryManagement } from './hooks/useGalleryManagement'

export function Gallery() {
  const {
    category: selectedCategory,
    items,
    selectedItem,
    currentIndex,
    dialogRef,
    open,
    close,
    move,
    filter,
    onKeyDown,
    onBackdropClick,
  } = useGalleryManagement()
  return (
    <>
      <PageIntro
        section="Galeri"
        title="Lihat setiap sisi pengelolaan."
        description="Area kerja, aktivitas, dan kelompok material melalui pilihan foto stok. Seluruh foto merupakan ilustrasi konsep ARUNA Resource."
      />
      <section className="section gallery-section">
        <div className="site-container">
          <div className="filter-toolbar">
            <fieldset className="filter-list" aria-label="Kategori galeri">
              {galleryFilters.map((category) => (
                <button
                  key={category}
                  aria-pressed={category === selectedCategory}
                  onClick={() => filter(category)}
                >
                  {category}
                </button>
              ))}
            </fieldset>
            <output>{items.length} visual</output>
          </div>
          <div className="gallery-grid">
            {items.map((item) => (
              <Reveal key={item.id}>
                <button
                  className="gallery-card"
                  onClick={() => open(item.id)}
                  aria-label={`Buka ${item.title}`}
                >
                  <div className="gallery-card-media">
                    <SitePhoto image={item.image} />
                    <span className="gallery-expand" aria-hidden="true">
                      <Maximize2 size={18} />
                    </span>
                  </div>
                  <span className="card-category">{item.category}</span>
                  <h2>{item.title}</h2>
                </button>
              </Reveal>
            ))}
          </div>
          <p className="scope-note">
            Foto stok dari Unsplash dan Pexels digunakan sebagai ilustrasi. Foto tidak menunjukkan
            fasilitas, tim, atau kegiatan operasional aktual ARUNA Resource.
          </p>
        </div>
      </section>
      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-labelledby="gallery-dialog-title"
        onClose={close}
        onKeyDown={onKeyDown}
        onClick={onBackdropClick}
      >
        {selectedItem && (
          <>
            <div className="gallery-dialog-top">
              <span>{selectedItem.category}</span>
              <button className="icon-button" onClick={close} aria-label="Tutup galeri" autoFocus>
                <X size={23} />
              </button>
            </div>
            <SitePhoto image={selectedItem.image} sizes="(max-width: 980px) 100vw, 980px" />
            <div className="gallery-dialog-bottom">
              <div>
                <h2 id="gallery-dialog-title">{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
              <div className="gallery-dialog-controls">
                <button
                  className="icon-button"
                  onClick={() => move(-1)}
                  aria-label="Visual sebelumnya"
                >
                  <ArrowLeft size={22} />
                </button>
                <span aria-live="polite">
                  {currentIndex + 1} / {items.length}
                </span>
                <button
                  className="icon-button"
                  onClick={() => move(1)}
                  aria-label="Visual berikutnya"
                >
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  )
}
