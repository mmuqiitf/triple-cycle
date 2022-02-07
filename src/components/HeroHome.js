function HeroHome() {
  return (
    <section
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
                yang kami tangani akan mendapatkan solusi yang spesifik seputar
                permasalahan yang dihadapinya.
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
    </section>
  );
}

export default HeroHome;
