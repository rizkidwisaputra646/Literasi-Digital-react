import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);


  
  const desktopLinkClasses = "text-gray-600 text-sm font-medium py-2 px-3 rounded-md transition hover:text-blue-600";
  const mobileLinkClasses = "block py-2 px-3 rounded-md font-medium text-gray-600 transition hover:bg-gray-50 hover:text-blue-600";

  const desktopNavLinks = isHomePage ? (
    <>
      <a href="#home" onClick={closeMenu} className={desktopLinkClasses}>Home</a>
      <a href="#materi" onClick={closeMenu} className={desktopLinkClasses}>Materi</a>
      <a href="#panduan" onClick={closeMenu} className={desktopLinkClasses}>Panduan</a>
      <a href="#galeri" onClick={closeMenu} className={desktopLinkClasses}>Galeri</a>
      <a href="#tentang" onClick={closeMenu} className={desktopLinkClasses}>Tentang</a>
      <Link to="/koleksi" onClick={closeMenu} className={desktopLinkClasses}>Koleksi Buku</Link>
    </>
  ) : (
    <>
      <Link to="/" onClick={closeMenu} className={desktopLinkClasses}>Home</Link>
      <Link to="/koleksi" onClick={closeMenu} className={desktopLinkClasses}>Koleksi Buku</Link>
    </>
  );


  const mobileNavLinks = isHomePage ? (
    <>
      <a href="#home" onClick={closeMenu} className={mobileLinkClasses}>Home</a>
      <a href="#materi" onClick={closeMenu} className={mobileLinkClasses}>Materi</a>
      <a href="#panduan" onClick={closeMenu} className={mobileLinkClasses}>Panduan</a>
      <a href="#galeri" onClick={closeMenu} className={mobileLinkClasses}>Galeri</a>
      <a href="#tentang" onClick={closeMenu} className={mobileLinkClasses}>Tentang</a>
      <Link to="/koleksi" onClick={closeMenu} className={mobileLinkClasses}>Koleksi Buku</Link>
    </>
  ) : (
    <>
      <Link to="/" onClick={closeMenu} className={mobileLinkClasses}>Home</Link>
      <Link to="/koleksi" onClick={closeMenu} className={mobileLinkClasses}>Koleksi Buku</Link>
    </>
  );
  
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              <Link to={isHomePage ? "#home" : "/"} className="text-2xl font-bold text-blue-600">
                LiterasiDigital
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:ml-auto md:gap-8">
              {desktopNavLinks}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Buka menu</span>
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Ikon Close */}
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-2 px-2 bg-white shadow-lg`}>
          {mobileNavLinks}
        </div>
      </nav>

      {/* Konten Halaman */}
      <Outlet />
    </>
  );
}