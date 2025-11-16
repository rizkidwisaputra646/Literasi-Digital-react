import React, { useState, useMemo } from 'react';


const allBooks = [
  {
    title: 'Modul Keamanan Digital',
    link: 'https://drive.google.com/file/d/1ueb0Igq2_O6TVRk6BOlq_NzMzhkWUC5a/view',
    cover: '/foto buku/modul keamanan digital.webp',
  },
  {
    title: 'Modul Whatsapp Untuk Anak',
    link: 'https://drive.google.com/file/d/1w3G4D0q-u894edn4pwBalA84N9SJ9765/view',
    cover: '/foto buku/Modul Whatsapp Untuk Anak.webp',
  },
  {
    title: 'Modul Etis Bermedia Digital',
    link: 'https://drive.google.com/file/d/1zg3HR-6RYcukW7o7c0BcO99JdnAtDCVx/view',
    cover: '/foto buku/Modul Etis Bermedia Digital.webp',
  },
  {
    title: 'AI as a Future Technology of Work',
    link: 'https://drive.google.com/file/d/1HFFswKLwamBK-6Rxv4eUI_chEjcKxMwR/view',
    cover: '/foto buku/AI as a Future Technology of Work.webp',
  },
  {
    title: 'Judi Itu Candu: Panduan Anti Judi Online',
    link: 'https://drive.google.com/drive/folders/1Ne2bg9gQXRyr3xOoXfYmb55w-j5aN_52',
    cover: '/foto buku/Panduan Anti Judi Online.webp',
  },
  {
    title: 'WASPADA KEJAHATAN PHISHING ATTACK!',
    link: 'https://drive.google.com/file/d/13u3_36EFPM-m7SLfWoHGRBxOd0V8LYDo/view',
    cover: '/foto buku/WASPADA KEJAHATAN PHISHING ATTACK!.webp',
  },
  {
    title: 'Awas Kejebak Hoaks',
    link: 'https://drive.google.com/file/d/1rTnnjNeZwYXJJw_BFyg4uTSd_CO6ov_n/view',
    cover: '/foto buku/Awas Kejebak Hoaks.webp',
  },
  {
    title: 'Aktif Lawan Konten Negatif',
    link: 'https://drive.google.com/file/d/11FDJRYLlRzRZ_0PpQe_1F3gRLxh-qsWB/view',
    cover: '/foto buku/Aktif Lawan Konten Negatif.webp',
  },
  {
    title: 'Paham Etiket di Dunia Internet',
    link: '#',
    cover: '/foto buku/Resep Menjadi Netizen Beradab.webp',
  },
  {
    title: 'Jaga Data Pribadimu',
    link: 'https://drive.google.com/file/d/12Vk3I0zcal_JpKnxICJHGBYnJQNs3n2m/view',
    cover: '/foto buku/Jaga Data Pribadimu.webp',
  },
  {
    title: 'Berkomentarlah Dengan Bijak Agar Sosmed jadi Enak',
    link: 'https://drive.google.com/file/d/1Ne_v2Giv8LCBVphgdJIxgl1wsBDL2qwk/view',
    cover: '/foto buku/Berkomentarlah Dengan Bijak Agar Sosmed jadi Enak.webp',
  },
  {
    title: 'Mewujudkan UMKM Cakap Digital dan Paham Pelindungan Data Pribadi',
    link: 'https://drive.google.com/file/d/1FX8Be6BOOln_ei1niyVdkMJ7zuNzfaUI/view',
    cover: '/foto buku/Mewujudkan UMKM Cakap Digital.webp',
  },
  {
    title: 'Tiga Tantangan Utama Transformasi Digital Indonesia',
    link: 'https://drive.google.com/file/d/1WMt7fcqtFnpBmaszWIy5k7Mo8c6uPBaq/view',
    cover: '/foto buku/Tiga Tantangan Utama Transformasi Digital Indonesia.webp',
  },
  {
    title: 'Panduan Jadi Konten Kreator Berani Baik',
    link: 'https://drive.google.com/file/d/1vf0sLlEm8_ub6BotTWwJz5Lkj7dzD8ls/view',
    cover: '/foto buku/Panduan Jadi Konten Kreator Berani Baik.webp',
  },
  {
    title: 'Manajemen Strategi dan Praktik Komunikasi Publik Via Kanan Digital',
    link: 'https://drive.google.com/file/d/1V8QzJSkK3qXymn_wgxjOXCL_RDzTAKcl/view',
    cover: '/foto buku/Manajemen Strategi dan Praktik Komunikasi Publik Via Kanan Digital.webp',
  },
  {
    title: 'Media Sosial VS Perundingan Siber',
    link: 'https://drive.google.com/file/d/1G5yQbqhruW7LjOef46d27OL3z7H4Hifw/view',
    cover: '/foto buku/Media Sosial VS Perundingan Siber.webp',
  },
  {
    title: 'Peluang dan Risiko Penggunaan AI dalam Iklan Politik',
    link: 'https://drive.google.com/file/d/1-tYLBNx_H1CGQgfCc4ZXwU0lwzGQdRwq/view',
    cover: '/foto buku/Peluang dan Risiko Penggunaan AI dalam Iklan Politik.webp',
  },
  {
    title: '"Cashless Society" di Indonesia: Risiko dan Tantangan',
    link: 'https://drive.google.com/file/d/1MOQAka7wB4fWgjaQvOcVrcLVjrGpF6bg/view',
    cover: '/foto buku/Cashless Society di Indonesia  Risiko dan Tantangan.webp',
  },
  {
    title: 'Modul Strategi Hidup di Dunia Digital',
    link: 'https://drive.google.com/file/d/1XByrfKmOccepu_WLYXr27B1AP2weP3uB/view',
    cover: '/foto buku/Modul Strategi Hidup di Dunia Digital.webp',
  },
  {
    title: 'Membentuk Netizen Tangguh Untuk Indonesia Tumbuh',
    link: 'https://drive.google.com/file/d/1dfUZjCSa4dMYZL4-_g9o_J4yvUzY0HvQ/view',
    cover: '/foto buku/Membentuk Netizen Tangguh Untuk Indonesia Tumbuh.webp',
  },
  {
    title: 'Cyberlaw dan Revolusi Industri 4.0',
    link: 'https://drive.google.com/file/d/1TA9Hcb_aaENQaquzqM6xYoURmaNN2097/view',
    cover: '/foto buku/Cyberlaw dan Revolusi Industri 4.0.webp',
  },
  {
    title: 'Muslim Millenial Ramah Digital',
    link: 'https://drive.google.com/file/d/15AeHRC_jIU0mN8cBQpDl0C7p8s_OVQOY/view',
    cover: '/foto buku/Muslim Millenial Ramah Digital.webp',
  },
  {
    title: 'SSO Pakai Internet Secara Sehat & Cerdas di Sekolah (Buku Aktivitas Remaja)',
    link: 'https://drive.google.com/file/d/1ahPUuTrSoZe4PAiV5rLn-BDd1FknJ8Vr/view',
    cover: '/foto buku/SSO Pakai Internet Secara Sehat & Cerdas di Sekolah (Buku Aktivitas Remaja).webp',
  },
  {
    title: 'Strategi Kewirausahaan Digital',
    link: 'https://drive.google.com/file/d/1UBW2WSOTBisa_oP3foa7AiE2dAyHcpqq/view',
    cover: '/foto buku/Strategi Kewirausahaan Digital.webp',
  },
];

const ITEMS_PER_PAGE = 6;

export default function Koleksi() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredBooks = useMemo(() => {
    return allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);


  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);


  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredBooks.slice(start, end);
  }, [filteredBooks, currentPage]);


  const gotoPage = (page) => {
    if (page < 1 || page > totalPages && totalPages > 0) {
      return;
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };


  const renderPaginationButtons = () => {
    if (totalPages <= 1) return null;

    let items = [];

    items.push(
      <button
        key="prev"
        onClick={() => gotoPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        &lt;
      </button>
    );


    items.push(
      <button
        key={1}
        onClick={() => gotoPage(1)}
        className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
      >
        1
      </button>
    );


    if (currentPage > 3) {
      items.push(<span key="left-ellipsis" className="pagination-ellipsis">...</span>);
    }


    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        items.push(
          <button
            key={i}
            onClick={() => gotoPage(i)}
            className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
    }


    if (currentPage < totalPages - 2) {
      items.push(<span key="right-ellipsis" className="pagination-ellipsis">...</span>);
    }


    if (totalPages > 1) {
      items.push(
        <button
          key={totalPages}
          onClick={() => gotoPage(totalPages)}
          className={`pagination-btn ${currentPage === totalPages ? 'active' : ''}`}
        >
          {totalPages}
        </button>
      );
    }


    items.push(
      <button
        key="next"
        onClick={() => gotoPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        &gt;
      </button>
    );

    return items;
  };

  return (
    <section id="koleksi" className="py-20 scroll-mt-16 bg-gray-50 min-h-screen pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title text-center mb-16">
          <h2 className="text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-4">
            Koleksi Buku Digital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih buku dan baca langsung melalui Google Drive
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-sm mx-auto mb-8 flex">
          <input
            type="text"
            id="searchInput"
            placeholder="Cari judul buku..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-base 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Book Grid */}
        <div
          className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 
                     max-sm:grid-cols-2 max-sm:gap-4"
        >
          {paginatedBooks.length > 0 ? (
            paginatedBooks.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-center pb-4 
                           transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105"
              >

                <div className="book-cover w-full relative pt-[133.155%] overflow-hidden bg-gray-100">
                  <img
                    src={book.cover}
                    alt="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                  />
                </div>
                <h3
                  className="m-4 text-gray-900 text-xl font-bold min-h-[3.75rem] 
                             max-sm:text-base max-sm:min-h-[3rem]"
                >
                  {book.title}
                </h3>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-5 bg-blue-600 text-white rounded-full font-semibold transition hover:bg-blue-700
                             max-sm:py-1 max-sm:px-3 max-sm:text-sm"
                >
                  Baca Sekarang
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center py-10">
              Tidak ada buku ditemukan untuk pencarian "{searchTerm}".
            </p>
          )}
        </div>

        {/* Pagination */}
        <div
          className="flex justify-center gap-1.5 flex-wrap mt-8"
        >
          <style>{`
            .pagination-btn {
              padding: 6px 12px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              background-color: #2563eb; /* bg-blue-600 */
              color: white;
              font-weight: 600;
              transition: background-color 0.2s;
            }
            .pagination-btn:hover:not(:disabled):not(.active) {
              background-color: #1d4ed8; /* hover:bg-blue-700 */
            }
            .pagination-btn.active {
              background-color: #1f2937; /* bg-gray-800 */
            }
            .pagination-btn:disabled {
              background-color: #ccc; /* bg-gray-300 */
              cursor: not-allowed;
              opacity: 0.7;
            }
            .pagination-ellipsis {
              padding: 6px 10px;
              color: #374151; /* text-gray-700 */
              font-weight: bold;
            }
          `}</style>
          {renderPaginationButtons()}
        </div>
      </div>
    </section>
  );
}