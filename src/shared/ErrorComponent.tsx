import { Link } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'

export function ErrorComponent({ reset }: ErrorComponentProps) {
  return (
    <section className="site-container route-feedback">
      <h1 tabIndex={-1}>Halaman belum dapat ditampilkan.</h1>
      <p>Coba muat kembali atau lanjutkan melalui beranda.</p>
      <div className="button-row">
        <button className="button" onClick={reset}>
          Coba lagi
        </button>
        <Link className="text-link" to="/">
          Kembali ke beranda
        </Link>
      </div>
    </section>
  )
}
