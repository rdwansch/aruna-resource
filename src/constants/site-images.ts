import type { SiteImage } from '@/types/site'

// Source links, photographers, and licenses are recorded in docs/image-sources.md.
export const siteImages = {
  facility: {
    src: '/images/facility-1600.webp',
    alt: 'Foto udara area pemulihan material di antara pepohonan hijau',
  },
  team: {
    src: '/images/team-1600.webp',
    alt: 'Petugas gudang meninjau inventaris di antara rak material',
  },
  receiving: {
    src: '/images/receiving-1600.webp',
    alt: 'Dua petugas membawa kotak di lorong gudang',
  },
  sorting: {
    src: '/images/sorting-1600.webp',
    alt: 'Petugas dengan helm dan rompi bekerja pada konveyor pemilahan',
  },
  storage: {
    src: '/images/storage-1600.webp',
    alt: 'Lorong rak penyimpanan dengan palet dan kendaraan pengangkat',
  },
  inventory: {
    src: '/images/inventory-1600.webp',
    alt: 'Petugas memegang papan pencatatan di area penyimpanan',
  },
  handover: {
    src: '/images/handover-1600.webp',
    alt: 'Petugas memeriksa material di atas palet bersama rekan kerja',
  },
  documentation: {
    src: '/images/documentation-1600.webp',
    alt: 'Petugas menulis daftar pemeriksaan pada papan pencatatan',
  },
  electronics: {
    src: '/images/electronics-1600.webp',
    alt: 'Papan sirkuit, modul memori, dan komponen elektronik',
  },
  battery: {
    src: '/images/battery-1600.webp',
    alt: 'Beragam baterai bekas terkumpul di fasilitas daur ulang',
  },
  metal: {
    src: '/images/metal-1600.webp',
    alt: 'Komponen dan potongan logam bekas untuk penilaian pemulihan',
  },
  packaging: {
    src: '/images/packaging-1600.webp',
    alt: 'Bal kertas dan kardus yang dipadatkan di fasilitas daur ulang',
  },
  office: {
    src: '/images/office-1600.webp',
    alt: 'Interior bangunan gudang dengan area kerja yang terbuka',
  },
} satisfies Record<string, SiteImage>
