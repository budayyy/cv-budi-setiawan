import { TbCircleFilled } from "react-icons/tb";

export default function Pendidikan() {
  return (
    <div className="p-2 lg:p-4 bg-white max-w-4xl space-y-4">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">
        Pendidikan
      </h3>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
            <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
            <span className="text-[#979696] italic">2019 - 2024</span>
          </h4>
          <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
            <h4 className=" text-base lg:text-xl font-semibold text-gray-900 mb-2">
              Universitas Muhammadiyah Cirebon
            </h4>
            <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-2">
              Sarjana Teknik Informatika
            </h4>
            <p className="text-base lg:text-xl font-semibold text-[#979696]">
              IPK 3.71/4
            </p>
          </div>
        </div>
        <div className="mb-4 lg:mb-0">
          <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 flex gap-2 items-center">
            <TbCircleFilled className="text-xs lg:text-sm text-[#979696]" />
            <span className="text-[#979696] italic">2012 - 2015</span>
          </h4>
          <div className="border-l-2 lg:border-l-4 border-gray-300 pl-4 ml-1">
            <h4 className="text-base lg:text-xl font-semibold text-gray-900 mb-2">
              SMA Negeri 1 Ciledug
            </h4>
            <h4 className="text-base lg:text-xl font-semibold text-[#979696] italic mb-2">
              Ilmu Pengetahuan Alam ( IPA )
            </h4>
            <p className="text-base lg:text-xl font-semibold text-[#979696]">
              Nilai 85,7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
