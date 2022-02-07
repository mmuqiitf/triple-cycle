function RuangLingkup() {
  return (
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
              <h2 className="font-semibold text-primary mb-9 text-[28px]">1</h2>

              <div className="mb-10">
                Melakukan perdagangan umum termasuk juga perdagangan
                interinsulair, impor dan ekspor, baik untuk perhitungan sendiri
                maupun atas tanggungan pihak lain secara komisi, serta
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
              <h2 className="font-semibold text-primary mb-9 text-[28px]">2</h2>

              <div className="mb-10">
                Melakukan usaha dalam bidang pemberian jasa dan/atau pelayanan
                (service) yang berkenaan serta dibutuhkan untuk melaksanakan
                suatu usaha, kecuali jasa dalam bidang hukum, antara lain:
                <ol className="list-decimal text-left">
                  <li>Jasa konsultansi bidang industri</li>
                  <li>
                    Jasa konsultansi bidang teknik kimia (chemical engineering)
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
              <h2 className="font-semibold text-primary mb-9 text-[28px]">3</h2>

              <div className="mb-10">
                Melakukan usaha dalam bidang industri pada umumnya, antara lain
                melakukan usaha dalam bidang:
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
  );
}
export default RuangLingkup;
