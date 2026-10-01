# ARUNA Resource

Demo company profile B2B berbahasa Indonesia. Seluruh konten statis; foto stok disimpan sebagai aset WebP lokal dari Unsplash dan Pexels. Logo SVG dibuat khusus untuk konsep ini. Perusahaan, mitra, dan kegiatan bersifat fiktif. Form kontak hanya menampilkan pratinjau lokal, tanpa pengiriman atau penyimpanan.

## Menjalankan

```sh
bun install
bun run dev
```

Alamat pengembangan: `http://127.0.0.1:5173`.

```sh
bun run build
bun run preview
bun run check
```

## Stack dan struktur

React 19, TypeScript, Vite, TanStack Start dalam mode SPA, TanStack Router dengan file-based routing, Tailwind CSS 4, Lucide, dan React Compiler melalui Babel. Font default Helvetica Neue; Manrope lokal untuk heading. Quality tooling memakai Oxlint dan Oxfmt. Konfigurasi shadcn tersedia; folder UI tetap kosong karena belum perlu komponen tambahan.

Struktur mengikuti `.agents/AGENTS.md`, disesuaikan dengan arahan fase statis. Query, autentikasi, state manager global, API client, generator OpenAPI, dan library data/form tambahan ditunda. State interaksi lokal memakai React; seluruh logic interaktif berada dalam hook management fitur. Dialog dan validasi form memakai browser native.

```text
src/
├── client/                 # kosong: API client belum dibutuhkan
├── components/form/        # primitive form
├── components/ui/          # kosong: komponen shadcn sesuai kebutuhan
├── config/
├── constants/site-content.ts
├── data/
├── features/               # Home, Company, Services, ServiceDetails,
│                           # Gallery, Insights, ArticleDetails, Contact
├── hooks/                  # logic navigasi lintas fitur
├── integrations/           # kosong: tidak ada Query atau autentikasi
├── layout/SiteShell.tsx
├── lib/
├── routes/                 # route tipis; detail dalam folder domain
├── shared/                 # komponen lintas fitur dan fallback
├── store/                  # kosong: tidak ada global state manager
├── types/site.ts
├── utils/
├── router.tsx
├── start.ts
└── styles.css
```

`src/routeTree.gen.ts` dihasilkan otomatis oleh plugin TanStack. Jangan edit manual. Alias `@/*` dan `#/*` menuju `src/*`.

## Halaman dan interaksi

Beranda, perusahaan, daftar/detail layanan, galeri dengan kategori dan dialog native, daftar/detail artikel dengan pencarian lokal, kontak dengan validasi dan pratinjau, serta 404 untuk alamat atau slug yang tidak tersedia. Tombol dari detail layanan mengisi pilihan layanan pada kontak. Navigasi mobile menutup saat pindah halaman. Gerakan menghormati `prefers-reduced-motion`.

## Build statis

TanStack Start menghasilkan shell SPA `index.html` dan aset di `dist/client`. Isi folder tersebut dapat dilayani hosting statis; semua URL halaman harus diarahkan ke `index.html`. File `_redirects` untuk hosting yang mendukung format Netlify sudah tersedia. Tidak ada SSR halaman, server function, endpoint, atau backend. Build server internal Start hanya digunakan untuk menghasilkan shell saat build.

Shell memakai `ClientOnly` agar navigasi mengikuti URL aktual setelah shell statis dimuat. Konfigurasi `vite.preview.config.ts` melayani hasil build sebagai file statis tanpa middleware server Start.

Husky dan Nano Staged telah dikonfigurasi. Hook Git aktif setelah folder menjadi repository Git dan menjalankan `bun run prepare`; fase ini tidak membuat repository atau commit.

## Konten dan aset

Ubah dummy data di `src/constants/site-content.ts`. Type lintas fitur berada di `src/types/site.ts`. Artikel ditulis khusus untuk demo dan mencantumkan sumber primer EPA/NIST. Referensi umum internasional tidak menggantikan penilaian teknis maupun persyaratan lokal.

Seluruh slot foto menggunakan aset stok dengan lisensi gratis yang diperiksa pada halaman sumber. Daftar fotografer, sumber, dan lisensi tersedia di [docs/image-sources.md](docs/image-sources.md). Foto merupakan ilustrasi, bukan dokumentasi fasilitas atau kegiatan ARUNA. Aset lokal berada di `public/images`; pemetaan berada di `src/constants/site-images.ts`. Tersedia ukuran 640 dan 1600 piksel dengan pemuatan responsif dan lazy loading, kecuali hero yang diprioritaskan. Tidak ada foto AI. PDF company profile, PPT, dan penerapan ke hosting belum termasuk fase ini.

Hasil pemeriksaan dan screenshot tersedia di [docs/verification.md](docs/verification.md).
