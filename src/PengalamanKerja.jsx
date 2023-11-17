import { TbCircleFilled } from "react-icons/tb";

export default function PengalamanKerja() {
  return (
    <div className="p-2 lg:p-4 bg-white w-full space-y-4">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">
        Pengalaman Kerja
      </h3>
      <div>
        <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
          <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
          Web Developer |
          <span className="text-xs lg:text-xl text-[#979696] italic">
            Desember 2021 - April 2023
          </span>
        </h4>
        <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
          <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-4">
            PT GMJ Global Energy - Kontrak
          </h4>
          <ul className="text-sm lg:text-base font-medium lg:font-semibold text-gray-900 list-disc pl-4 space-y-2">
            <li>
              Merancang dan membuat program berbasis web dengan framework
              Laravel
            </li>
            <li>Development program ke dalam server</li>
            <li>
              Mengatasi Debug dan menerapkan solusi di berbagai program web
            </li>
            <li>Membuat sistem admin panel</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
          <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
          Staff Survey |
          <span className="text-[#979696] italic">Juni 2020 - Juli 2020</span>
        </h4>
        <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
          <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-4">
            SDGS Kemendes - Paruh Waktu
          </h4>
          <ul className="text-sm lg:text-base font-medium lg:font-semibold text-gray-900 list-disc pl-4 space-y-2">
            <li>Melakukan survey data masyarakat</li>
            <li>Memvalidasi data dan input data kedalam sistem</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
          <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
          Ketua KPPS Desa Gebang |
          <span className="text-[#979696] italic">Maret 2019 - April 2020</span>
        </h4>
        <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
          <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-4">
            KPU Kabupaten Cirebon - Paruh Waktu
          </h4>
          <ul className="text-sm lg:text-base font-medium lg:font-semibold text-gray-900 list-disc pl-4 space-y-2">
            <li>Mengkoordinir anggota KPPS</li>
            <li>Membuat berita acara mengenai pemilihan umum</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
          <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
          Staff Survey |
          <span className="text-[#979696] italic">Mei 2018 - Juni 2018</span>
        </h4>
        <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
          <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-4">
            CV IPTEK Sinergi Hayati - Paruh Waktu
          </h4>
          <ul className="text-sm lg:text-base font-medium lg:font-semibold text-gray-900 list-disc pl-4 space-y-2">
            <li>
              Bertanggung jawab atas kelengkapan data survey pada pengembangan
              di wilayah Cirebon
            </li>
            <li>
              Bertugas mengumpulkan data secara jujur dan mendapatkan hasil
              survey dengan data yang ada
            </li>
            <li>
              Berkontribusi pada pengumpulan data survey di bidang ekonomi
              keratif & UMKM di wilayah Cirebon
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
