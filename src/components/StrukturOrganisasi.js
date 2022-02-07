function StrukturOrganisasi() {
  return (
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
                Struktur Organisasi
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
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center justify-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="/image/male-student.png"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Salafudin, ST., M.Sc
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">Direktur</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {" "}
                          Active{" "}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center justify-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="/image/male-student.png"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Riza Martwan, ST.
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          Kepala Divisi Process Engineering
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {" "}
                          Active{" "}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center justify-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="/image/male-student.png"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Yulianti Pratama, ST., MT.
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          Kepala Divisi Environmental Engineering
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {" "}
                          Active{" "}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrukturOrganisasi;
