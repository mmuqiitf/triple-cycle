function Navbar() {
  return (
    <div
      className="
          ud-header
          bg-gray-700
          absolute
          top-0
          left-0
          z-40
          w-full
          flex
          items-center
        "
    >
      <div className="container">
        <div className="flex -mx-4 items-center justify-between relative">
          <div className="px-4">
            <a href="index.html" className="navbar-logo w-full block py-2">
              <img
                src="/image/triple_cycle-removebg.png"
                alt="logo"
                className="w-20"
              />
            </a>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                className="
                    block
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    lg:hidden
                    focus:ring-2
                    ring-primary
                    px-3
                    py-[6px]
                    rounded-lg
                  "
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="
                    absolute
                    py-5
                    lg:py-0 lg:px-4
                    xl:px-6
                    bg-white
                    lg:bg-transparent
                    shadow-lg
                    rounded-lg
                    max-w-[250px]
                    w-full
                    lg:max-w-full lg:w-full
                    right-4
                    top-full
                    hidden
                    lg:block lg:static lg:shadow-none
                  "
              >
                <ul className="blcok lg:flex">
                  <li className="relative group">
                    <a
                      href="#home"
                      className="
                          ud-menu-scroll
                          text-base text-dark
                          lg:text-white
                          lg:group-hover:opacity-70
                          lg:group-hover:text-white
                          group-hover:text-primary
                          py-2
                          lg:py-6 lg:inline-flex lg:px-0
                          flex
                          mx-8
                          lg:mr-0
                        "
                    >
                      Home
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#data-pokok"
                      className="
                          ud-menu-scroll
                          text-base text-dark
                          lg:text-white
                          lg:group-hover:opacity-70
                          lg:group-hover:text-white
                          group-hover:text-primary
                          py-2
                          lg:py-6 lg:inline-flex lg:px-0
                          flex
                          mx-8
                          lg:mr-0 lg:ml-7
                          xl:ml-12
                        "
                    >
                      Tentang
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#informasi"
                      className="
                          ud-menu-scroll
                          text-base text-dark
                          lg:text-white
                          lg:group-hover:opacity-70
                          lg:group-hover:text-white
                          group-hover:text-primary
                          py-2
                          lg:py-6 lg:inline-flex lg:px-0
                          flex
                          mx-8
                          lg:mr-0 lg:ml-7
                          xl:ml-12
                        "
                    >
                      Informasi
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#lingkup"
                      className="
                          ud-menu-scroll
                          text-base text-dark
                          lg:text-white
                          lg:group-hover:opacity-70
                          lg:group-hover:text-white
                          group-hover:text-primary
                          py-2
                          lg:py-6 lg:inline-flex lg:px-0
                          flex
                          mx-8
                          lg:mr-0 lg:ml-7
                          xl:ml-12
                        "
                    >
                      Ruang Lingkup
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#struktur"
                      className="
                          ud-menu-scroll
                          text-base text-dark
                          lg:text-white
                          lg:group-hover:opacity-70
                          lg:group-hover:text-white
                          group-hover:text-primary
                          py-2
                          lg:py-6 lg:inline-flex lg:px-0
                          flex
                          mx-8
                          lg:mr-0 lg:ml-7
                          xl:ml-12
                        "
                    >
                      Struktur Organisasi
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#pengalaman"
                      className="
                          ud-menu-scroll
                          text-base text-dark
                          lg:text-white
                          lg:group-hover:opacity-70
                          lg:group-hover:text-white
                          group-hover:text-primary
                          py-2
                          lg:py-6 lg:inline-flex lg:px-0
                          flex
                          mx-8
                          lg:mr-0 lg:ml-7
                          xl:ml-12
                        "
                    >
                      Pengalaman Perusahaan
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
