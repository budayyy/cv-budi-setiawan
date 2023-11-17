import { TbCircleCheck } from "react-icons/tb";

export default function Keterampilan() {
  return (
    <div className="p-2 lg:p-4 bg-white w-full space-y-4">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
        Keterampilan
      </h3>
      <div className="flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-4 lg:gap-12 text-lg lg:text-xl font-medium lg:font-semibold">
        <span className="flex items-center gap-2">
          <TbCircleCheck className="text-green-600" />
          Komunikasi
        </span>
        <span className="flex items-center gap-2">
          <TbCircleCheck className="text-green-600" />
          Teamwork
        </span>
        <span className="flex items-center gap-2">
          <TbCircleCheck className="text-green-600" />
          Leadership
        </span>
        <span className="flex items-center gap-2">
          <TbCircleCheck className="text-green-600" />
          Bertanggung jawab
        </span>
        <span className="flex items-center gap-2">
          <TbCircleCheck className="text-green-600" />
          Problem Solving
        </span>
      </div>
    </div>
  );
}
