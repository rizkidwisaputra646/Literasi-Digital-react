import React, { useEffect } from 'react';


function useScrollAnimation() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const hiddenClass = 'is-hidden';
    const visibleClass = 'is-visible';


    animatedElements.forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'ease-out', hiddenClass);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            entry.target.classList.remove(hiddenClass);
          } else {
            if (entry.boundingClientRect.y > 0) {
              entry.target.classList.add(hiddenClass);
              entry.target.classList.remove(visibleClass);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));


    return () => animatedElements.forEach((el) => observer.unobserve(el));
  }, []); 
}

export default function Home() {

  useScrollAnimation();

  return (
    <>
      <main>
        {/* */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center text-center pt-16 bg-gradient-to-b from-blue-100 to-gray-50 scroll-mt-16"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content">
              <h1 className="scroll-animate text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 tracking-tight mb-4">
                Literasi Digital untuk Pemuda
              </h1>
              <p
                className="scroll-animate text-lg sm:text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto mb-8"
                style={{ transitionDelay: '200ms' }}
              >
                Menavigasi Peluang dan Tantangan di Era Disrupsi Teknologi.
              </p>
              <div
                className="scroll-animate"
                style={{ transitionDelay: '400ms' }}
              >
                <a
                  href="#materi"
                  className="inline-block bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg transition hover:bg-blue-700"
                >
                  Mulai Belajar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section id="materi" className="py-20 scroll-mt-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-title text-center mb-16">
              <h2 className="scroll-animate text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-4">
                Materi Dasar Literasi Digital
              </h2>
              <p
                className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ transitionDelay: '150ms' }}
              >
                Tiga pengetahuan utama agar kita dapat menggunakan teknologi
                secara cerdas dan bertanggung jawab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* */}
              <div className="scroll-animate card bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="card-icon">
                  <svg
                    className="h-10 w-10 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 4.5l9 7.5-9 7.5V4.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-3">
                  Etika & Jejak Digital
                </h3>
                <p className="text-gray-600">
                  Semua aktivitas online akan tersimpan sebagai jejak digital.
                  Maka penting untuk bersikap sopan, bijak, dan tidak membagikan
                  hal yang dapat merugikan diri sendiri maupun orang lain.
                </p>
              </div>

              {/* */}
              <div
                className="scroll-animate card bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200"
                style={{ transitionDelay: '150ms' }}
              >
                <div className="card-icon">
                  <svg
                    className="h-10 w-10 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12c0-6 7.5-9 7.5-9s7.5 3 7.5 9-7.5 9-7.5 9-7.5-3-7.5-9z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-3">
                  Keamanan & Privasi Online
                </h3>
                <p className="text-gray-600">
                  Belajar melindungi password, data pribadi, dan akun dari
                  penyalahgunaan dengan cara menggunakan keamanan ganda, tidak
                  sembarang klik link, dan berhati-hati saat berbagi data.
                </p>
              </div>

              {/* */}
              <div
                className="scroll-animate card bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="card-icon">
                  <svg
                    className="h-10 w-10 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9m-9 6h9m-9 6h9M4.5 6h.01M4.5 12h.01M4.5 18h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-3">
                  Literasi Informasi & Anti Hoax
                </h3>
                <p className="text-gray-600">
                  Mampu menganalisis informasi sebelum mempercayai atau
                  membagikannya. Selalu cek sumber, kebenaran, dan tujuan dari
                  informasi agar tidak ikut menyebarkan berita palsu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section id="panduan" className="py-20 scroll-mt-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-title text-center mb-16">
              <h2 className="scroll-animate text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-4">
                Panduan Keamanan Digital
              </h2>
              <p
                className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ transitionDelay: '150ms' }}
              >
                Tips praktis untuk melindungi data pribadi Anda di dunia maya.
              </p>
            </div>
            <div className="guide-list max-w-3xl mx-auto flex flex-col gap-6">
              <div className="scroll-animate bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="guide-item-icon flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Gunakan Password Kuat & Unik
                  </h4>
                  <p className="text-gray-600">
                    Kombinasikan huruf besar, kecil, angka, dan simbol. Jangan
                    gunakan password yang sama untuk semua akun.
                  </p>
                </div>
              </div>
              <div
                className="scroll-animate bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
                style={{ transitionDelay: '150ms' }}
              >
                <div className="guide-item-icon flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Aktifkan Autentikasi Dua Faktor (2FA)
                  </h4>
                  <p className="text-gray-600">
                    Lapisan keamanan tambahan selain password, biasanya
                    menggunakan kode OTP dari HP Anda.
                  </p>
                </div>
              </div>
              <div
                className="scroll-animate bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="guide-item-icon flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Waspada Phishing
                  </h4>
                  <p className="text-gray-600">
                    Jangan sembarangan mengklik link atau lampiran dari email atau
                    pesan yang mencurigakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section id="galeri" className="py-20 scroll-mt-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-title text-center mb-16">
              <h2 className="scroll-animate text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-4">
                Galeri Poster Edukasi
              </h2>
              <p
                className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ transitionDelay: '150ms' }}
              >
                Visualisasi data dan informasi penting seputar literasi digital.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="scroll-animate gallery-item rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/image/posterr aanti phising.jpeg"
                  alt="Poster Edukasi 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="scroll-animate gallery-item rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/image/cloud computing.jpeg"
                  alt="Poster Edukasi 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="scroll-animate gallery-item rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/image/ioot.jpeg"
                  alt="Poster Edukasi 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="scroll-animate gallery-item rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/image/aii resiko.jpeg"
                  alt="Poster Edukasi 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="scroll-animate gallery-item rounded-lg overflow-hidden shadow-2xl"
                style={{ transitionDelay: '150ms' }}
              >
                <img
                  src="/image/jejakk digital.jpeg"
                  alt="Poster Edukasi 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="scroll-animate gallery-item rounded-lg overflow-hidden shadow-2xl"
                style={{ transitionDelay: '300ms' }}
              >
                <img
                  src="/image/caraa aman di internet.jpeg"
                  alt="Poster Edukasi 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section id="tentang" className="py-20 scroll-mt-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-title text-center mb-16">
              <h2 className="scroll-animate text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-4">
                Tentang Misi Kami
              </h2>
              <p
                className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ transitionDelay: '150ms' }}
              >
                Mengapa website ini ada dan apa tujuan kami untuk Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-5xl mx-auto">
              <div
                className="scroll-animate"
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Website ini adalah ruang belajar digital bagi pemuda Indonesia.
                  Tujuan kami sederhana: membantu Anda menjadi generasi yang lebih
                  <strong> siap, kritis, dan cerdas</strong> dalam menghadapi era
                  disrupsi. <br />
                  <br />
                  Dengan pengetahuan digital yang kuat, Anda bisa lebih
                  <strong> aman, kreatif, dan percaya diri</strong> menavigasi masa
                  depan yang terus bergerak cepat.
                </p>
              </div>

              <div
                className="flex flex-col gap-6 scroll-animate"
                style={{ transitionDelay: '400ms' }}
              >
                {/* */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-8 w-8 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Literasi Digital
                    </h4>
                    <p className="text-gray-600">
                      Memahami cara menggunakan dan menganalisis informasi
                      digital.
                    </p>
                  </div>
                </div>
                {/* */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-8 w-8 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.16-2.08a1.2 1.2 0 01.78-.22l.473.05a.75.75 0 00.729-.057l.003-.002a.8.8 0 01.78-.22l.473.05a.75.75 0 00.729-.057l.003-.002a.8.8 0 01.78-.22l.473.05a.75.75 0 00.729-.057l.003-.002a.8.8 0 01.78-.22l.473.05a.75.75 0 00.729-.057l.003-.002a.8.8 0 01.78-.22l.473.05a.75.75 0 00.729-.057l.003-.002a.8.8 0 01.78-.22l.473.05a.75.75 0 00.729-.057l.003-.002z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Keamanan Siber
                    </h4>
                    <p className="text-gray-600">
                      Melindungi data pribadi dan waspada terhadap ancaman online.
                    </p>
                  </div>
                </div>
                {/* */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-8 w-8 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m16-6h-2m-2 6h-2M12 5V3m0 16v-2m5.65-13.65l-1.41-1.41M5.76 18.24l-1.41-1.41M18.24 5.76l-1.41 1.41M5.76 5.76l1.41 1.41M12 12a3 3 0 100-6 3 3 0 000 6z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Teknologi Masa Depan
                    </h4>
                    <p className="text-gray-600">
                      Memahami perkembangan kecerdasan buatan (AI) dan
                      transformasi perdagangan digital melalui E-commerce sebagai
                      fondasi teknologi masa depan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* */}
      <footer className="bg-gray-800 text-gray-400 py-12 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="scroll-animate">
            © 2025 Literasi Digital untuk Pemuda.
          </p>
          <p
            className="scroll-animate text-sm mt-2"
            style={{ transitionDelay: '150ms' }}
          >
            Dibuat oleh tim <b>when yah bisa jadi fullstack ??</b>
          </p>
        </div>
      </footer>
    </>
  );
}