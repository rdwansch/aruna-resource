# Sumber foto

Diperiksa pada 2 Oktober 2026. Seluruh foto adalah aset stok sebagai ilustrasi konsep; tidak menggambarkan fasilitas, karyawan, klien, atau kegiatan aktual ARUNA Resource.

Foto yang dipilih berlabel gratis pada halaman sumber, tanpa Unsplash+ atau aset sponsor. [Unsplash License](https://unsplash.com/license) dan [Pexels License](https://www.pexels.com/license/) mengizinkan penggunaan gratis untuk proyek komersial tanpa kewajiban atribusi. Kredit berikut disimpan untuk melacak asal setiap aset. Pemakaian tetap mengikuti batasan lisensi, termasuk tidak menyiratkan dukungan fotografer atau orang dalam foto kepada ARUNA.

| Nama aset       | Pemakaian                                     | Fotografer dan halaman sumber                                                                                                   | Lisensi  |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `sorting`       | Galeri pemilahan                              | [Ari Gardinier](https://unsplash.com/photos/worker-feeding-blue-material-onto-conveyor-belt-WE8LyB7YrBM)                        | Unsplash |
| `storage`       | Galeri penyimpanan, disposal aset             | [Ashley](https://unsplash.com/photos/a-warehouse-filled-with-lots-of-boxes-and-pallets-28b8xlTT5t4)                             | Unsplash |
| `office`        | Foto penutup halaman kontak                   | [Brian Wangenheim](https://unsplash.com/photos/a-large-empty-warehouse-with-no-people-in-it-D7A6CiIFVk8)                        | Unsplash |
| `electronics`   | Limbah elektronik, galeri, artikel elektronik | [Michael Dziedzic](https://unsplash.com/photos/a-close-up-of-a-circuit-board-with-many-other-electronic-components-XSzA_rJ8thc) | Unsplash |
| `battery`       | Artikel baterai bekas                         | [John Cameron](https://unsplash.com/photos/a-pile-of-batteries-that-are-very-close-together-aAmUEXvX1bQ)                        | Unsplash |
| `packaging`     | Pemulihan material, galeri, artikel material  | [John Cameron](https://unsplash.com/photos/a-large-amount-of-bags-of-trash-in-a-warehouse-hiolzE-43S8)                          | Unsplash |
| `team`          | Tentang ARUNA di beranda                      | [Tiger Lily](https://www.pexels.com/photo/men-working-in-a-warehouse-4481260/)                                                  | Pexels   |
| `handover`      | Halaman perusahaan, galeri koordinasi         | [Tiger Lily](https://www.pexels.com/photo/men-working-in-a-warehouse-4481531/)                                                  | Pexels   |
| `receiving`     | Galeri penerimaan, cuplikan beranda           | [Tiger Lily](https://www.pexels.com/photo/warehouse-workers-carrying-boxes-4487361/)                                            | Pexels   |
| `inventory`     | Galeri inventarisasi                          | [Tima Miroshnichenko](https://www.pexels.com/photo/man-in-white-button-up-shirt-and-black-cap-holding-a-clipboard-6169652/)     | Pexels   |
| `facility`      | Hero beranda                                  | [Bernd Dittrich](https://unsplash.com/photos/aerial-view-of-recycling-plant-with-green-trees-RiQk4l1rCK8)                       | Unsplash |
| `metal`         | Limbah industri, galeri logam                 | [Karthik Srinivas](https://unsplash.com/photos/a-pile-of-old-metal-parts-sitting-on-top-of-each-other-WlHycHUQIvY)              | Unsplash |
| `documentation` | Galeri pencatatan                             | [Daniel Andraski](https://www.pexels.com/photo/close-up-shot-of-a-person-doing-a-checklist-12234106/)                           | Pexels   |

## Penyimpanan

Setiap nama aset memiliki dua file di `public/images`: `nama-640.webp` (640 × 427) dan `nama-1600.webp` (1600 × 1067). File diunduh dari CDN sumber dalam WebP dengan crop 3:2; tampilan memakai `object-fit: cover` sesuai ukuran slot. Tidak ada gambar yang dihasilkan AI.

Pemetaan gambar dan deskripsi alternatif berada di `src/constants/site-images.ts`. Layanan, galeri, dan artikel memakai referensi gambar dari `src/constants/site-content.ts`. Komponen `SitePhoto` menyediakan `srcset`, `sizes`, dimensi intrinsik, dan lazy loading; hero memakai pemuatan eager dengan prioritas tinggi. Seluruh permintaan gambar saat website berjalan menuju aset lokal.

Foto baterai hanya menggambarkan material bekas; tidak dimaksudkan sebagai petunjuk penyimpanan atau pengangkutan.
