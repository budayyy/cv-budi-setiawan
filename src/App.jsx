import Header from "./Header";
import Keterampilan from "./Keterampilan";
import Pendidikan from "./Pendidikan";
import PengalamanKerja from "./PengalamanKerja";
import PengalamanOrganisasi from "./PengalamanOrganisasi";
import TechStack from "./TechStack";

export default function App() {
  return (
    <div className="w-full bg-white py-4 lg:pt-8 lg:pb-20">
      <div className="max-w-7xl mx-auto bg-white rounded lg:border lg:border-gray-300 p-4">
        <Header />
        <hr className="my-2" />
        <PengalamanKerja />
        <PengalamanOrganisasi />
        <Pendidikan />
        <TechStack />
        <Keterampilan />
      </div>
    </div>
  );
}
