import { ClientOnly, Link, Outlet } from '@tanstack/react-router'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/shared/site-ui'
import { useSiteNavigation } from '@/hooks/useSiteNavigation'
import { ContentLoading } from '@/shared/ContentLoading'

const currentYear = new Date().getFullYear()

export function ClientSiteShell() {
  return (
    <ClientOnly fallback={<ContentLoading />}>
      <SiteShell />
    </ClientOnly>
  )
}

const navigation = [
  { to: '/', label: 'Beranda' },
  { to: '/perusahaan', label: 'Perusahaan' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/insight', label: 'Insight' },
] as const

export function SiteShell() {
  const { menuOpen, menuButton, toggleMenu } = useSiteNavigation()

  return (
    <>
      <a href="#main-content" className="skip-link">
        Lewati ke konten
      </a>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link to="/" aria-label="ARUNA Resource — beranda" className="brand-link">
            <Logo />
          </Link>
          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === '/' }}
                activeProps={{ className: 'nav-active', 'aria-current': 'page' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/kontak" className="button header-contact">
            Hubungi kami <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={toggleMenu}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Navigasi seluler"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              activeProps={{ className: 'nav-active', 'aria-current': 'page' }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/kontak">
            Hubungi kami <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" aria-label="ARUNA Resource — beranda">
                <Logo inverse />
              </Link>
              <p>
                Pengelolaan limbah elektronik, material industri, dan aset yang sudah tidak
                terpakai.
              </p>
              <span>Material. Proses. Tanggung jawab.</span>
            </div>
            <div>
              <h2>Jelajahi</h2>
              <nav aria-label="Navigasi footer">
                {navigation.slice(1).map((item) => (
                  <Link key={item.to} to={item.to}>
                    {item.label}
                  </Link>
                ))}
                <Link to="/kontak">Kontak</Link>
              </nav>
            </div>
            <div>
              <h2>Lingkup layanan</h2>
              <nav aria-label="Layanan footer">
                <Link to="/layanan/$slug" params={{ slug: 'limbah-elektronik' }}>
                  Limbah elektronik
                </Link>
                <Link to="/layanan/$slug" params={{ slug: 'limbah-industri' }}>
                  Limbah industri
                </Link>
                <Link to="/layanan/$slug" params={{ slug: 'disposal-aset' }}>
                  Disposal aset
                </Link>
                <Link to="/layanan/$slug" params={{ slug: 'pemulihan-material' }}>
                  Pemulihan material
                </Link>
              </nav>
            </div>
            <div className="footer-contact">
              <h2>Mari bicara</h2>
              <p>Mulai dengan jenis material dan kebutuhan bisnis Anda.</p>
              <Link to="/kontak" className="text-link">
                Diskusikan kebutuhan <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {currentYear} ARUNA Resource</span>
            <p>
              Demo konsep. Perusahaan, mitra, dan aktivitas bersifat ilustratif; bukan bukti izin
              atau rekam jejak operasional. Foto stok digunakan sebagai ilustrasi.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
