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
                    href="#data-pokok"
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
                    Scroll
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
