import collections from "../data/collections.json";
function Pengalaman() {
  console.log(collections);
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
                Daftar Pengalaman Perusahaan
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
                Berikut ini adalah informasi mengenai pengalaman perusahaan
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-10">
          <div className="grid grid-cols-3 gap-y-8 gap-x-5">
            {collections.map((collection, index) => (
              <>
                <div key={`image_${index}`}>
                  {collection.gambar !== null ? (
                    <img
                      src={`/image/${collection.gambar}`}
                      alt={`${collection.judul}`}
                      className="mx-auto"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1546185058-592ead754d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt={`${collection.judul}`}
                      className="mx-auto"
                    />
                  )}
                </div>
                <div
                  key={`konten_${index}`}
                  className="col-span-2 text-left tracking-wide leading-8"
                >
                  <h1 className="text-xl font-bold">{collection.judul}</h1>
                  <ul className="text-lg my-5">
                    <li>Klien : {collection.klien}</li>
                    <li>Lokasi : {collection.lokasi}</li>
                  </ul>
                  <p className="indent-8 text-lg">{collection.deskripsi}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pengalaman;
