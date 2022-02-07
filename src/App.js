import logo from "./logo.svg";
import "./App.css";
import WOW from "wowjs";
import { useState } from "react";

function App() {
  new WOW.WOW({
    live: false,
  }).init();

  return (
    <div className="App">
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
                        href="#about"
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
                        About
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#pricing"
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
                        Pricing
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#team"
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
                        Team
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#contact"
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
                        Contact
                      </a>
                    </li>
                    <li className="relative group submenu-item">
                      <a
                        href="/"
                        className="
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                        flex
                        mx-8
                        lg:mr-0 lg:ml-8
                        xl:ml-12
                        relative
                      "
                      >
                        Pages
                      </a>
                      <div
                        className="
                        submenu
                        hidden
                        relative
                        lg:absolute
                        w-[250px]
                        top-full
                        lg:top-[110%]
                        left-0
                        rounded-sm
                        lg:shadow-lg
                        p-4
                        lg:block lg:opacity-0 lg:invisible
                        group-hover:opacity-100
                        lg:group-hover:visible lg:group-hover:top-full
                        bg-white
                        transition-[top]
                        duration-300
                      "
                      >
                        <a
                          href="about.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          About Page
                        </a>
                        <a
                          href="pricing.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          Pricing Page
                        </a>
                        <a
                          href="contact.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          Contact Page
                        </a>
                        <a
                          href="blog-grids.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          Blog Grid Page
                        </a>
                        <a
                          href="blog-details.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          Blog Details Page
                        </a>
                        <a
                          href="signup.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          Sign Up Page
                        </a>
                        <a
                          href="signin.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          Sign In Page
                        </a>
                        <a
                          href="404.html"
                          className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
                        >
                          404 Page
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
                <a
                  href="signin.html"
                  className="
                  text-base
                  font-medium
                  text-white
                  hover:opacity-70
                  py-3
                  px-7
                  loginBtn
                "
                >
                  Sign In
                </a>
                <a
                  href="signup.html"
                  className="
                  text-base
                  font-medium
                  text-white
                  bg-white bg-opacity-20
                  rounded-lg
                  py-3
                  px-6
                  hover:bg-opacity-100 hover:text-gray-500
                  signUpBtn
                  duration-300
                  ease-in-out
                "
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home"
        className="relative pt-[120px] pb-6 md:pt-[130px] lg:pt-[160px] bg-green-500 max-h-full"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div
                className="
                hero-content
                text-center
                max-w-[780px]
                mx-auto
                wow
                fadeInUp
              "
                data-wow-delay=".2s"
              >
                <h1
                  className="
                  text-white
                  font-bold
                  text-5xl
                  sm:text-4xl
                  md:text-[45px]
                  leading-snug
                  sm:leading-snug
                  md:leading-snug
                  mb-8
                "
                >
                  CV. Triple Cycle
                </h1>
                <img
                  src="/image/triple_cycle-removebg.png"
                  className="w-48 h-48 mx-auto"
                  alt="Logo"
                />
                <p
                  className="
                  text-base
                  sm:text-lg sm:leading-relaxed
                  md:text-xl md:leading-relaxed
                  mx-auto
                  mb-10
                  text-gray-200
                  max-w-[600px]
                "
                >
                  CV. Triple Cycle adalah perusahaan yang bekerja secara custom,
                  yang berarti setiap produk dan jasa yang dihasilkannya selalu
                  disesuaikan dengan kebutuhan dan kondisi klien. Setiap klien
                  yang kami tangani akan mendapatkan solusi yang spesifik
                  seputar permasalahan yang dihadapinya.
                </p>

                <ul className="flex flex-wrap items-center justify-center mb-10">
                  <li>
                    <a
                      href="https://links.tailgrids.com/play-download"
                      className="
                      py-4
                      px-6
                      sm:px-10
                      inline-flex
                      items-center
                      justify-center
                      text-center text-dark text-base
                      bg-white
                      hover:text-primary hover:shadow-lg
                      font-medium
                      rounded-lg
                      transition
                      duration-300
                      ease-in-out
                    "
                    >
                      Download Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      target="_blank"
                      className="
                      text-base
                      font-medium
                      text-white
                      py-4
                      px-6
                      sm:px-10
                      flex
                      items-center
                      hover:opacity-70
                      transition
                      duration-300
                      ease-in-out
                    "
                    >
                      Star on Github
                      <span className="pl-2">
                        <svg
                          width="20"
                          height="8"
                          viewBox="0 0 20 8"
                          className="fill-current"
                        >
                          <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
                <div
                  className="text-center wow fadeInUp"
                  data-wow-delay=".3s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-12 lg:mb-20 max-w-[620px] mx-auto">
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
                >
                  Informasi
                </h2>
                <p
                  className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
                >
                  Berikut ini adalah informasi yang tersedia pada website ini
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-primary rounded-3xl">
              <div className="mb-12 group wow fadeInUp" data-wow-delay=".1s">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-white
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                  mx-auto
                "
                >
                  <span
                    className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-white bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-white mb-3">
                  Data Pokok Perusahaan
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  Data Pokok Perusahaan ini merupakan informasi identitas
                  perusahaan.
                </p>
                <a
                  href="/"
                  className="py-2
                  px-4
                  sm:px-5
                  inline-flex
                  items-center
                  justify-center
                  text-center text-dark text-base
                  bg-white
                  hover:text-primary hover:shadow-lg
                  font-medium
                  rounded-lg
                  transition
                  duration-300
                  ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="p-4 bg-primary rounded-3xl">
              <div className="mb-12 group wow fadeInUp" data-wow-delay=".15s">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-white
                  rounded-2xl
                  mb-8
                  relative
                  mx-auto
                  z-10
                "
                >
                  <span
                    className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-white bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-white mb-3">
                  Ruang Lingkup Layanan Jasa
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  Informasi secara garis besar ruang lingkup kegiatan usaha CV.
                  Triple Cycle
                </p>
                <a
                  href="/"
                  className="py-2
                  px-4
                  sm:px-5
                  inline-flex
                  items-center
                  justify-center
                  text-center text-dark text-base
                  bg-white
                  hover:text-primary hover:shadow-lg
                  font-medium
                  rounded-lg
                  transition
                  duration-300
                  ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="p-4 bg-primary rounded-3xl">
              <div className="mb-12 group wow fadeInUp" data-wow-delay=".2s">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-white
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                  mx-auto
                "
                >
                  <span
                    className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-white bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-white mb-3">
                  Struktur Organisasi
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  Berikut ini adalah Struktur Organisasi yang ada di CV Triple
                  Cycle
                </p>
                <a
                  href="/"
                  className="py-2
                  px-4
                  sm:px-5
                  inline-flex
                  items-center
                  justify-center
                  text-center text-dark text-base
                  bg-white
                  hover:text-primary hover:shadow-lg
                  font-medium
                  rounded-lg
                  transition
                  duration-300
                  ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="p-4 bg-primary rounded-3xl">
              <div className="mb-12 group wow fadeInUp" data-wow-delay=".25s">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-white
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                  mx-auto
                "
                >
                  <span
                    className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-white bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-white mb-3">
                  Pengalaman Kerja Perusahaan
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  Pengalaman CV Triple Cycle dalam mengelola proyek
                </p>
                <a
                  href="/"
                  className="py-2
                  px-4
                  sm:px-5
                  inline-flex
                  items-center
                  justify-center
                  text-center text-dark text-base
                  bg-white
                  hover:text-primary hover:shadow-lg
                  font-medium
                  rounded-lg
                  transition
                  duration-300
                  ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-green-300 bg-opacity-20 pb-8">
        <div className="container mx-auto pt-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-8 max-w-[620px] mx-auto">
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
                >
                  Data Pokok Perusahaan
                </h2>
                <p
                  className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
                >
                  Berikut ini adalah informasi mengenai data pokok perusahaan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Data Pokok Perusahaan
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nama Perusahaan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                  CV. TRIPLE CYCLE
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Landasan Hukum
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                  <ul>
                    <li>Akte Pendirian : </li>
                    <li>Notaris : Raden Ira Laksana Dewi, SH., M.Kn. No. 1</li>
                    <li>Tanggal : 09 Maret 2012</li>
                  </ul>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Domisili Perusahaan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                  Komplek Permata Biru Blok AT.34, RT 11 RW 24, Cinunuk,
                  Kecamatan Cileunyi, Kabupaten Bandung, Jawa Barat
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nomor Pokok Wajib Pajak (NPWP)
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                  <ul>
                    <li>Nomor : 03.219.776.6-444.000</li>
                    <li>Tanggal : 04 April 2012</li>
                  </ul>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Surat Ijin Usaha Perdagangan (SIUP) Kecil
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                  <ul>
                    <li>Nomor : 00525/10-12/PK/IV/2012</li>
                    <li>Tanggal : 18 April 2012</li>
                  </ul>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tanda Daftar Perusahaan (TDP)
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                  <ul>
                    <li>Nomor : 10.24.3.46.07405</li>
                    <li>Tanggal : 18 April 2012</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-white pb-8">
        <div className="container mx-auto pt-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-8 max-w-[620px] mx-auto">
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
                >
                  Ruang Lingkup Layanan Jasa
                </h2>
                <p
                  className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
                >
                  Berikut ini adalah informasi mengenai ruang lingkup perusahaan
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                text-center
                wow
                fadeInUp
              "
                data-wow-delay=".15s
              "
              >
                <span className="text-dark font-medium text-base uppercase block mb-2">
                  Perdagangan Umum
                </span>
                <h2 className="font-semibold text-primary mb-9 text-[28px]">
                  1
                </h2>

                <div className="mb-10">
                  Melakukan perdagangan umum termasuk juga perdagangan
                  interinsulair, impor dan ekspor, baik untuk perhitungan
                  sendiri maupun atas tanggungan pihak lain secara komisi, serta
                  usaha-usaha sebagai supplier, leverensier, grossier,
                  distributor, dan keagenan/perwakilan dari badan-badan usaha
                  lain,
                </div>
                <div className="w-full">
                  <a
                    href="/"
                    className="
                    inline-block
                    text-base
                    font-medium
                    text-primary
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-full
                    text-center
                    py-4
                    px-11
                    hover:text-white hover:bg-primary hover:border-primary
                    transition
                    duration-300
                    ease-in-out
                  "
                  >
                    Purchase Now
                  </a>
                </div>
                <span
                  className="
                  absolute
                  left-0
                  bottom-0
                  z-[-1]
                  w-14
                  h-14
                  rounded-tr-full
                  block
                  bg-primary
                "
                ></span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                text-center
                wow
                fadeInUp
              "
                data-wow-delay=".15s
              "
              >
                <span className="text-dark font-medium text-base uppercase block mb-2">
                  Usaha Bidang Jasa
                </span>
                <h2 className="font-semibold text-primary mb-9 text-[28px]">
                  2
                </h2>

                <div className="mb-10">
                  Melakukan usaha dalam bidang pemberian jasa dan/atau pelayanan
                  (service) yang berkenaan serta dibutuhkan untuk melaksanakan
                  suatu usaha, kecuali jasa dalam bidang hukum, antara lain:
                  <ol className="list-decimal text-left">
                    <li>Jasa konsultansi bidang industri</li>
                    <li>
                      Jasa konsultansi bidang teknik kimia (chemical
                      engineering)
                    </li>
                    <li>Jasa training</li>
                    <li>Jasa penyelenggaraan usaha teknik</li>
                  </ol>
                </div>
                <div className="w-full">
                  <a
                    href="/"
                    className="
                    inline-block
                    text-base
                    font-medium
                    text-primary
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-full
                    text-center
                    py-4
                    px-11
                    hover:text-white hover:bg-primary hover:border-primary
                    transition
                    duration-300
                    ease-in-out
                  "
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                text-center
                wow
                fadeInUp
              "
                data-wow-delay=".15s
              "
              >
                <span className="text-dark font-medium text-base uppercase block mb-2">
                  Usaha Bidang Industri
                </span>
                <h2 className="font-semibold text-primary mb-9 text-[28px]">
                  3
                </h2>

                <div className="mb-10">
                  Melakukan usaha dalam bidang industri pada umumnya, antara
                  lain melakukan usaha dalam bidang:
                  <ol className="list-decimal text-left">
                    <li>Mesin</li>
                    <li>Pengolahan Sampah</li>
                    <li>Bahan Kimia</li>
                    <li>Bahan Bangunan</li>
                    <li>Bahan Makan</li>
                  </ol>
                </div>
                <div className="w-full">
                  <a
                    href="/"
                    className="
                    inline-block
                    text-base
                    font-medium
                    text-primary
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-full
                    text-center
                    py-4
                    px-11
                    hover:text-white hover:bg-primary hover:border-primary
                    transition
                    duration-300
                    ease-in-out
                  "
                  >
                    Purchase Now
                  </a>
                </div>

                <span
                  className="
                  absolute
                  right-0
                  top-0
                  z-[-1]
                  w-14
                  h-14
                  rounded-bl-full
                  block
                  bg-secondary
                "
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
