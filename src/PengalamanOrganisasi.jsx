import { TbCircleFilled } from "react-icons/tb";

export default function PengalamanOrganisasi() {
  return (
    <div className="p-2 lg:p-4 bg-white w-full space-y-4">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">
        Pengalaman Organisasi
      </h3>
      <div>
        <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
          <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
          Sekretaris |<span className="text-[#979696] italic">2019 - 2024</span>
        </h4>
        <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
          <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-4">
            Karang Taruna Tunas Bangsa Desa Gebang
          </h4>
          <ul className="text-sm lg:text-base font-medium lg:font-semibold text-gray-900 list-disc pl-4 space-y-2">
            <li>
              Bertanggung jawab atas manajemen atau pengelolaan administrasi dan
              pembuatan dokumen kesekretariatan.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
          <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
          Kepala Departemen Medinfo |
          <span className="text-[#979696] italic">2018 - 2019</span>
        </h4>
        <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
          <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-4">
            Badan Eksekutif Mahasiswa Fakultas Teknik | Universitas Muhammadiyah
            Cirebon
          </h4>
          <ul className="text-sm lg:text-base font-medium lg:font-semibold text-gray-900 list-disc pl-4 space-y-2">
            <li>
              Memberikan informasi secara umum bagi mahasiswa di berbagai media
              dan mengembangkan media informasi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
