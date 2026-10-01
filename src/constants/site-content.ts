import { siteImages } from '@/constants/site-images'
import type { Article, GalleryItem, ProcessStep, Service } from '@/types/site'

export const services: Service[] = [
  {
    slug: 'limbah-elektronik',
    title: 'Pengelolaan limbah elektronik',
    shortTitle: 'Limbah elektronik',
    category: 'Perangkat & komponen',
    summary:
      'Rencana pengelolaan perangkat elektronik yang sudah tidak digunakan, dari inventarisasi hingga pencatatan serah terima.',
    description:
      'Penggantian perangkat kantor menghasilkan beragam kebutuhan: penilaian penggunaan kembali, perlindungan data, dan penanganan komponen yang memerlukan perhatian khusus. Lingkup layanan disusun berdasarkan jenis perangkat, kondisinya, serta keputusan pemilik aset sebelum material diserahkan kepada pihak yang sesuai.',
    items: [
      'Komputer, laptop, dan perangkat jaringan',
      'Telepon, tablet, dan perangkat komunikasi',
      'Periferal, kabel, serta komponen elektronik',
      'Identifikasi perangkat dengan baterai dan media penyimpanan',
    ],
    deliverables: [
      'Daftar perangkat dan kondisi awal',
      'Rencana penanganan sesuai karakteristik perangkat',
      'Catatan serah terima dan rekonsiliasi inventaris',
      'Lingkup perlindungan data yang disepakati dengan tim IT',
    ],
    image: siteImages.electronics,
    icon: 'Laptop',
  },
  {
    slug: 'limbah-industri',
    title: 'Pengelolaan limbah industri',
    shortTitle: 'Limbah industri',
    category: 'Material B3 & non-B3',
    summary:
      'Pemetaan kebutuhan material sisa produksi dengan perhatian pada karakteristik, pemisahan, dan tujuan penanganannya.',
    description:
      'Setiap aliran material industri memiliki karakteristik berbeda. Penilaian awal membantu tim operasional menyusun lingkup pengelolaan material B3 maupun non-B3 bersama pihak yang kompeten. Klasifikasi, persyaratan penanganan, dan kewenangan pihak penerima perlu diverifikasi sebelum pekerjaan ditetapkan.',
    items: [
      'Inventarisasi material sisa proses produksi',
      'Peninjauan informasi material dan dokumen pendukung',
      'Pemetaan aliran material B3 dan non-B3',
      'Koordinasi kebutuhan pengumpulan dan pihak penerima',
    ],
    deliverables: [
      'Ringkasan jenis, sumber, dan perkiraan jumlah material',
      'Daftar informasi yang perlu dilengkapi',
      'Lingkup pekerjaan dan pembagian tanggung jawab',
      'Dokumentasi pengambilan serta penerimaan sesuai lingkup',
    ],
    image: siteImages.metal,
    icon: 'Factory',
  },
  {
    slug: 'disposal-aset',
    title: 'Disposal aset & barang reject',
    shortTitle: 'Disposal aset',
    category: 'Aset & produk',
    summary:
      'Pengelolaan aset tidak terpakai dan barang reject dengan keputusan pelepasan, pencatatan, dan batas penggunaan yang jelas.',
    description:
      'Aset akhir masa pakai dan produk reject memerlukan persetujuan yang melibatkan pemilik aset, tim pengadaan, serta unit terkait. Rencana disposal dimulai dari daftar barang dan alasan pelepasan, lalu menetapkan pilihan penanganan serta dokumentasi yang diperlukan untuk menutup catatan internal.',
    items: [
      'Aset kantor dan perlengkapan operasional',
      'Stok tidak terpakai serta produk reject',
      'Barang dengan batas penggunaan kembali',
      'Koordinasi kebutuhan perlindungan merek dan informasi',
    ],
    deliverables: [
      'Daftar barang yang telah disetujui untuk dilepas',
      'Rencana disposal dan batas penggunaan kembali',
      'Catatan identitas, jumlah, serta serah terima barang',
      'Rekap penanganan untuk pencocokan catatan aset',
    ],
    image: siteImages.storage,
    icon: 'PackageX',
  },
  {
    slug: 'pemulihan-material',
    title: 'Pemilahan & pemulihan material',
    shortTitle: 'Pemulihan material',
    category: 'Material & sumber daya',
    summary:
      'Penilaian potensi penggunaan kembali dan daur ulang berdasarkan jenis, kondisi, serta penerimaan material.',
    description:
      'Pemulihan material dimulai dengan memahami apa yang tersedia dan ke mana material dapat diarahkan. Pemilahan dan pencatatan membantu menilai pilihan penggunaan kembali atau daur ulang yang sesuai. Pilihan akhir bergantung pada karakteristik material, hasil penilaian, dan kemampuan pihak penerima; tidak semua material memiliki jalur pemulihan yang sama.',
    items: [
      'Pemetaan material yang berpotensi digunakan kembali',
      'Penilaian kategori logam, plastik, dan kemasan',
      'Pemilahan sesuai kebutuhan pihak penerima',
      'Pencatatan material yang belum memiliki jalur pemulihan',
    ],
    deliverables: [
      'Ringkasan kelompok dan kondisi material',
      'Pilihan jalur pemulihan untuk dibahas',
      'Catatan jumlah atau berat dengan dasar pengukuran',
      'Rekap tujuan penyaluran dan status penerimaan',
    ],
    image: siteImages.packaging,
    icon: 'Recycle',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Assessment',
    description:
      'Memahami jenis material, kondisi, lokasi, dan kebutuhan dokumentasi sebelum menetapkan lingkup.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Pengumpulan',
    description:
      'Menyepakati jadwal, tanggung jawab, dan daftar material yang akan diserahterimakan.',
    icon: 'Truck',
  },
  {
    title: 'Pemilahan',
    description:
      'Mengelompokkan material sesuai karakteristik dan rencana penanganan yang telah ditinjau.',
    icon: 'Layers3',
  },
  {
    title: 'Penanganan',
    description:
      'Mengarahkan material ke jalur yang sesuai dengan kebutuhan dan kemampuan pihak penerima.',
    icon: 'Settings2',
  },
  {
    title: 'Dokumentasi',
    description:
      'Mencocokkan catatan serah terima, penerimaan, dan hasil penanganan sesuai lingkup pekerjaan.',
    icon: 'FileCheck2',
  },
]

export const partners: string[] = [
  'Nusa Karya Industri',
  'Cakra Teknologi Prima',
  'Bumi Sentra Logistik',
  'Loka Manufaktur',
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'area-penerimaan',
    title: 'Area penerimaan material',
    category: 'Fasilitas',
    description:
      'Foto stok sebagai ilustrasi area penerimaan untuk memperlihatkan awal alur material. Ilustrasi konsep, bukan dokumentasi fasilitas ARUNA Resource.',
    image: siteImages.receiving,
  },
  {
    id: 'ruang-pemilahan',
    title: 'Ruang pemilahan',
    category: 'Fasilitas',
    description:
      'Foto stok sebagai ilustrasi ruang kerja dengan kelompok material yang teridentifikasi. Ilustrasi konsep fasilitas.',
    image: siteImages.sorting,
  },
  {
    id: 'area-penyimpanan',
    title: 'Area penyimpanan terorganisasi',
    category: 'Fasilitas',
    description:
      'Foto stok sebagai ilustrasi penataan material sebelum tahap selanjutnya. Bukan contoh teknis penyimpanan material berbahaya.',
    image: siteImages.storage,
  },
  {
    id: 'inventarisasi-perangkat',
    title: 'Inventarisasi material',
    category: 'Operasional',
    description:
      'Foto stok petugas dengan papan pencatatan untuk menggambarkan pemeriksaan inventaris sebelum serah terima.',
    image: siteImages.inventory,
  },
  {
    id: 'serah-terima',
    title: 'Serah terima material',
    category: 'Operasional',
    description:
      'Foto stok koordinasi petugas di area palet. Mengilustrasikan pemeriksaan bersama sebelum serah terima, bukan kegiatan klien aktual.',
    image: siteImages.handover,
  },
  {
    id: 'pencatatan-material',
    title: 'Pencatatan material',
    category: 'Operasional',
    description:
      'Foto stok sebagai ilustrasi peninjauan identitas dan jumlah material untuk dokumentasi. Ilustrasi alur pencatatan.',
    image: siteImages.documentation,
  },
  {
    id: 'perangkat-elektronik',
    title: 'Perangkat elektronik akhir pakai',
    category: 'Material',
    description:
      'Foto stok papan sirkuit dan komponen elektronik untuk menggambarkan kelompok material akhir pakai. Bukan hasil pengelolaan aktual.',
    image: siteImages.electronics,
  },
  {
    id: 'material-logam',
    title: 'Kelompok material logam',
    category: 'Material',
    description:
      'Foto stok sebagai ilustrasi material logam yang terkelompok untuk penilaian pemulihan. Ilustrasi jenis material.',
    image: siteImages.metal,
  },
  {
    id: 'kemasan-terpilah',
    title: 'Kemasan terpilah',
    category: 'Material',
    description:
      'Foto stok sebagai ilustrasi kelompok kemasan dengan identitas material yang jelas. Ilustrasi konsep pemilahan.',
    image: siteImages.packaging,
  },
]

export const articles: Article[] = [
  {
    slug: 'serah-terima-perangkat-elektronik-kantor',
    title: 'Menyiapkan serah terima perangkat elektronik kantor',
    category: 'Limbah elektronik',
    excerpt:
      'Daftar aset, keputusan penggunaan kembali, dan tanggung jawab data perlu disepakati sebelum perangkat meninggalkan kantor.',
    date: '2026-09-24',
    readTime: '5 menit',
    image: siteImages.electronics,
    sections: [
      {
        heading: 'Mulai dari daftar yang bisa dicocokkan',
        paragraphs: [
          'Penggantian laptop sering melibatkan beberapa unit sekaligus: IT mengetahui kondisi perangkat, keuangan memegang catatan aset, dan operasional mengatur pengambilan. Sebelum membahas jadwal, satukan daftar mereka dalam satu dokumen kerja. Cantumkan identitas perangkat, nomor aset bila tersedia, lokasi, kondisi yang diketahui, serta penanggung jawab. Beri tanda pada informasi yang belum pasti agar tidak berubah menjadi asumsi saat pengambilan.',
          'Pisahkan perangkat yang sudah disetujui untuk dilepas dari perangkat yang masih menunggu keputusan. Dengan begitu, daftar barang di ruang penyimpanan tidak otomatis menjadi daftar barang yang boleh diserahkan.',
          'Tentukan satu kontak yang berwenang memperbarui daftar. Jika perangkat tambahan ditemukan mendekati hari pengambilan, masukkan sebagai perubahan yang perlu diperiksa. Hindari menambahkan barang langsung ke kendaraan tanpa pencocokan dan persetujuan. Daftar terakhir yang digunakan kedua pihak sebaiknya memiliki tanggal pembaruan agar perbedaan versi mudah ditelusuri.',
        ],
      },
      {
        heading: 'Tetapkan keputusan untuk setiap kelompok',
        paragraphs: [
          'Tidak semua perangkat lama harus langsung masuk jalur daur ulang. EPA menyarankan mempertimbangkan peningkatan perangkat sebelum penggantian, dan menjelaskan bahwa elektronik mengandung material seperti logam, plastik, serta kaca. Untuk tim perusahaan, jadikan informasi ini alasan mengevaluasi kondisi dan kebutuhan terlebih dahulu, bukan dasar menjanjikan nilai pemulihan tertentu.',
          'Catat keputusan pemilik aset: dipakai kembali secara internal, dinilai untuk penggunaan lain, atau diajukan ke jalur pengelolaan akhir pakai. Sertakan alasan singkat. Keputusan ini membantu pengadaan menjelaskan lingkup kepada calon penyedia dan membandingkan penawaran yang memiliki dasar sama.',
        ],
      },
      {
        heading: 'Libatkan IT dalam keputusan data',
        paragraphs: [
          'Serah terima perangkat juga bisa berarti perpindahan media penyimpanan. NIST SP 800-88 Rev. 2 membahas program sanitasi media berdasarkan sensitivitas informasi, jenis media, dan kontrol yang sesuai. Jangan menetapkan satu metode untuk semua perangkat. Minta tim IT menentukan kebutuhan, pihak pelaksana, bukti hasil, serta siapa yang menerima atau menolak hasil tersebut.',
          'Masukkan keputusan itu ke lingkup pekerjaan. Perangkat yang kondisinya belum diketahui perlu dicatat terpisah agar status perlindungan datanya tidak dianggap selesai hanya karena barang telah diangkut.',
        ],
      },
      {
        heading: 'Sepakati bukti serah terima',
        paragraphs: [
          'Sebelum hari pengambilan, sepakati format dokumen yang akan digunakan kedua pihak. Pilih identitas yang cukup untuk mencocokkan barang dengan daftar internal tanpa memasukkan data pribadi atau informasi rahasia yang tidak diperlukan.',
        ],
        bullets: [
          'Daftar perangkat dan jumlah yang diterima.',
          'Tanggal, lokasi, serta pihak yang menyerahkan dan menerima.',
          'Perbedaan kondisi atau jumlah yang perlu ditindaklanjuti.',
          'Dokumentasi sanitasi media jika termasuk lingkup yang disepakati.',
        ],
      },
      {
        heading: 'Tutup pekerjaan dengan rekonsiliasi',
        paragraphs: [
          'Setelah pengambilan, cocokkan catatan penerimaan dengan daftar yang disetujui. Simpan pengecualian dan tindak lanjut bersama dokumen utama. Tim keuangan kemudian dapat memperbarui catatan aset dengan dasar yang jelas, sementara IT memastikan keputusan data telah ditutup. Artikel ini merupakan panduan persiapan administrasi; pemilihan metode teknis tetap memerlukan penilaian pihak yang kompeten.',
        ],
      },
    ],
    sources: [
      {
        title: 'US EPA — Electronics Donation and Recycling',
        url: 'https://www.epa.gov/recycle/electronics-donation-and-recycling',
      },
      {
        title: 'NIST SP 800-88 Rev. 2 — Guidelines for Media Sanitization',
        url: 'https://csrc.nist.gov/pubs/sp/800/88/r2/final',
      },
    ],
  },
  {
    slug: 'persiapan-pengambilan-baterai-bekas',
    title: 'Baterai bekas: informasi sebelum pengambilan',
    category: 'Operasional',
    excerpt:
      'Kondisi baterai, identitas perangkat, dan pembagian tanggung jawab membantu tim menyusun kebutuhan penanganan sebelum penjadwalan.',
    date: '2026-09-17',
    readTime: '5 menit',
    image: siteImages.battery,
    sections: [
      {
        heading: 'Kenali apa yang ada dalam inventaris',
        paragraphs: [
          'Baterai dapat tercatat sebagai barang tersendiri atau berada di dalam perangkat yang sudah tidak digunakan. Saat menyiapkan pengambilan, mulailah dari informasi yang tersedia pada catatan pengadaan, label produk, dan dokumentasi produsen. Cantumkan merek atau model, perkiraan jumlah, lokasi, serta apakah baterai masih terpasang di perangkat. Jika identitas belum diketahui, tulis status tersebut secara jelas daripada menebak jenisnya.',
          'EPA menjelaskan bahwa baterai lithium-ion dengan komposisi berbeda dapat tampak serupa, dan baterai yang terlihat habis masih dapat menyimpan energi. Penilaian tidak cukup berdasarkan penampilan atau keterangan bahwa perangkat sudah mati.',
        ],
      },
      {
        heading: 'Sampaikan kondisi sebelum menetapkan jadwal',
        paragraphs: [
          'Berikan informasi kondisi yang sudah diketahui kepada pihak yang akan menilai kebutuhan penanganan. Catat riwayat kerusakan atau pemberitahuan penarikan produk apabila ada. Hindari meminta tim administrasi membuka perangkat untuk memperoleh informasi tambahan. Tidak semua baterai dirancang untuk dilepas pengguna; EPA menyarankan mengikuti petunjuk produsen dan menghubungi produsen untuk baterai yang rusak.',
          'Dalam dokumen permintaan, bedakan informasi hasil pemeriksaan dari laporan pengguna yang belum dikonfirmasi. Pihak penilai kemudian dapat menentukan pertanyaan lanjutan dan apakah diperlukan tinjauan langsung sebelum memberikan rencana pekerjaan.',
          'Foto yang sudah tersedia dapat membantu menjelaskan identitas produk, tetapi bukan pengganti pemeriksaan kondisi. Batasi dokumentasi pada informasi yang dibutuhkan dan hindari meminta perubahan fisik semata-mata untuk membuat foto lebih jelas.',
        ],
      },
      {
        heading: 'Jangan samakan dengan pengambilan sampah rutin',
        paragraphs: [
          'EPA memperingatkan agar baterai lithium-ion dan perangkat yang mengandungnya tidak masuk sampah umum atau wadah daur ulang rumah tangga karena kerusakan saat pengangkutan atau pemrosesan dapat menimbulkan kebakaran. Untuk perusahaan, ini menjadi alasan membahas jalur pengambilan khusus dengan pihak yang memahami jenis material tersebut.',
          'Rujukan EPA berasal dari konteks Amerika Serikat. Gunakan informasi bahayanya sebagai bahan diskusi teknis; klasifikasi material, persyaratan pengangkutan, dan kewenangan penerima di lokasi perusahaan tetap perlu ditinjau berdasarkan ketentuan setempat oleh pihak yang kompeten.',
        ],
      },
      {
        heading: 'Buat pembagian tanggung jawab tertulis',
        paragraphs: [
          'Permintaan pengambilan yang jelas menyebut siapa pemilik barang, siapa kontak lokasi, dan siapa yang menyetujui rencana. Jangan biarkan tanggung jawab persiapan hanya tersirat dalam jadwal. Minta calon penyedia menjelaskan kebutuhan berdasarkan data yang telah diberikan, termasuk informasi tambahan yang diperlukan.',
        ],
        bullets: [
          'Siapa yang menilai kondisi dan menerima lingkup pekerjaan.',
          'Siapa yang menetapkan kebutuhan kemasan dan pengangkutan.',
          'Bagaimana perubahan kondisi dilaporkan sebelum pengambilan.',
          'Dokumen apa yang mengonfirmasi identitas dan penerimaan barang.',
        ],
      },
      {
        heading: 'Simpan catatan untuk pengambilan berikutnya',
        paragraphs: [
          'Setelah pekerjaan selesai, simpan daftar yang benar-benar diterima beserta perbedaan dari rencana awal. Informasi ini berguna ketika unit lain mengajukan pengambilan serupa. Persiapan yang baik bukan berarti menambah banyak formulir, melainkan memastikan data yang dibutuhkan tersedia sebelum keputusan diambil. Artikel ini membantu menyusun komunikasi; prosedur penanganan fisik dan pengiriman harus mengikuti penilaian khusus serta petunjuk pihak yang bertanggung jawab.',
        ],
      },
    ],
    sources: [
      {
        title: 'US EPA — Used Lithium-Ion Batteries',
        url: 'https://www.epa.gov/recycle/used-lithium-ion-batteries',
      },
    ],
  },
  {
    slug: 'rencana-pemulihan-material-stok-tidak-terpakai',
    title: 'Dari stok tidak terpakai ke rencana pemulihan material',
    category: 'Pemulihan material',
    excerpt:
      'Kelompokkan stok berdasarkan alasan pelepasan dan kondisi material agar pilihan penggunaan kembali atau daur ulang lebih mudah dinilai.',
    date: '2026-09-10',
    readTime: '5 menit',
    image: siteImages.packaging,
    sections: [
      {
        heading: 'Jelaskan alasan stok dilepas',
        paragraphs: [
          'Stok yang tidak lagi diperlukan perusahaan belum tentu memiliki kondisi yang sama. Ada kemasan sisa perubahan desain, komponen yang tidak cocok dengan lini produksi baru, atau produk yang ditolak pemeriksaan mutu. Susun daftar berdasarkan alasan pelepasan, lalu tambahkan kondisi, jumlah, dan pemilik keputusan. Dengan informasi ini, calon penerima dapat menilai barang tanpa menganggap seluruh stok tersedia untuk penggunaan kembali.',
          'Untuk barang reject, cantumkan pembatasan yang telah ditetapkan pemilik produk. Keputusan mengenai merek, spesifikasi, dan penggunaan kembali sebaiknya selesai sebelum barang ditawarkan ke pihak lain.',
        ],
      },
      {
        heading: 'Nilai penggunaan kembali sebelum daur ulang',
        paragraphs: [
          'Dalam hierarki pengelolaan material nonberbahaya, EPA menempatkan pencegahan limbah dan penggunaan kembali di atas daur ulang. EPA juga menegaskan bahwa tidak ada satu pendekatan yang cocok untuk semua material dan keadaan. Artinya, rencana pemulihan perlu mempertimbangkan karakteristik dan kebutuhan nyata, bukan memilih jalur berdasarkan istilah yang paling menarik.',
          'Bagi tim pengadaan, langkah praktisnya adalah mengajukan pertanyaan berurutan: apakah barang masih dibutuhkan unit lain, apakah penggunaan kembali diizinkan, dan apakah material dapat diterima untuk daur ulang? Jawaban yang belum tersedia dicatat sebagai pekerjaan lanjutan, bukan persetujuan otomatis.',
        ],
      },
      {
        heading: 'Berikan informasi yang dibutuhkan penerima',
        paragraphs: [
          'Penawaran berdasarkan nama umum seperti “plastik” atau “logam” dapat menyisakan banyak pertanyaan. Lengkapi dengan informasi komposisi yang tersedia, bentuk material, kondisi, dan apakah terdapat campuran atau sisa proses. Sertakan dokumen spesifikasi yang relevan tanpa membuka informasi produk yang bersifat rahasia.',
          'Minta pihak penerima menjelaskan kriteria penerimaan dan hal yang belum bisa dipastikan. Jika klasifikasi material belum jelas, libatkan pihak yang kompeten untuk menilainya sebelum mencampurkan kelompok barang atau menetapkan jalur penanganan. Hierarki nonberbahaya tidak boleh langsung dipakai sebagai dasar penanganan seluruh limbah industri.',
          'Sertakan pertanyaan ini dalam permintaan penawaran sehingga setiap calon penyedia menjawab kebutuhan yang sama. Perbandingan harga kemudian bisa mempertimbangkan batas penerimaan, dokumentasi, dan pekerjaan tambahan yang memang dibutuhkan.',
        ],
      },
      {
        heading: 'Bedakan perkiraan dari hasil tercatat',
        paragraphs: [
          'Pada tahap perencanaan, jumlah mungkin berasal dari catatan gudang atau perkiraan volume. Ketika barang diterima, dasar pencatatannya dapat berbeda. Sepakati satuan dan cara mencocokkan data sebelum pekerjaan dimulai supaya laporan akhir dapat dibaca oleh operasional maupun keuangan.',
        ],
        bullets: [
          'Nama kelompok material dan identitas daftar asal.',
          'Jumlah atau berat beserta dasar pengukurannya.',
          'Pihak penerima dan status penerimaan material.',
          'Selisih, penolakan, atau material yang masih menunggu keputusan.',
        ],
      },
      {
        heading: 'Gunakan hasil untuk memperbaiki pengadaan',
        paragraphs: [
          'Rekap pemulihan juga dapat menjadi masukan untuk pembelian berikutnya. Tinjau kelompok stok yang berulang kali tersisa, pertanyaan penerima yang paling sering muncul, dan kebutuhan spesifikasi yang belum tercatat. Tim dapat membahas perubahan jumlah pembelian atau desain kemasan berdasarkan temuan tersebut. Hindari menyebut seluruh material “berhasil didaur ulang” hanya karena telah diambil; bedakan bukti serah terima dari informasi proses selanjutnya yang memang tersedia.',
        ],
      },
    ],
    sources: [
      {
        title: 'US EPA — Non-Hazardous Materials and Waste Management Hierarchy',
        url: 'https://www.epa.gov/smm/sustainable-materials-management-non-hazardous-materials-and-waste-management-hierarchy',
      },
    ],
  },
]
