function DataPokok() {
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
                Komplek Permata Biru Blok AT.34, RT 11 RW 24, Cinunuk, Kecamatan
                Cileunyi, Kabupaten Bandung, Jawa Barat
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
  );
}

export default DataPokok;
