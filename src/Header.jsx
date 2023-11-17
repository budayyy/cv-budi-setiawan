import {
  TbPhone,
  TbMail,
  TbMapPin,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";

function Header() {
  return (
    <div className="w-full lg:flex gap-2">
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-4 lg:mb-0">
        <div className="h-40 w-40 lg:h-60 lg:w-60 rounded-full overflow-hidden">
          <img
            src="./img/budi-foto.jpg"
            alt="budi-foto"
            className="bg-cover bg-center"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <h3 className="text-xl lg:text-3xl text-center lg:text-left font-semibold text-slate-950 mb-2 lg:mb-4 lg:pl-2 leading-relaxed">
          Budi Setiawan | Web Developer
        </h3>
        <p className="text-sm lg:text-base font-semibold leading-relaxed mb-2 lg:mb-4 text-gray-600 lg:pl-2 text-justify lg:text-left">
          Saya lulus dengan gelar Sarjana Teknik di Universitas Muhammadiyah
          Cirebon dan seorang programmer dengan pengalaman 1 tahun menggunakan
          PHP dan framework Laravel untuk mengembangkan program dibidang web
          development. Saya memiliki semangat kerja yang tinggi dan bertanggung
          jawab terhadap tugas dan pekerjaan.
        </p>
        <div className="w-full flex flex-col items-start lg:flex-row lg:items-center lg:justify-between mb-2">
          <a
            href="https://wa.me/+6287829890388"
            target="blank"
            className="flex gap-2 items-center text-base font-semibold leading-relaxed p-2 rounded-sm text-gray-900 hover:bg-gray-100"
          >
            <TbPhone />
            087829890388
          </a>
          <a
            href="mailto:bsetiawan260@gmail.com"
            target="blank"
            className="flex gap-2 items-center text-base font-semibold leading-relaxed p-2 rounded-sm text-gray-900 hover:bg-gray-100"
          >
            <TbMail />
            bsetiawan260@gmail.com
          </a>
          <a
            href="https://maps.app.goo.gl/pXskZR2cayvnC1FCA"
            target="blank"
            className="flex gap-2 items-center text-base font-semibold leading-relaxed p-2 rounded-sm text-gray-900 hover:bg-gray-100"
          >
            <TbMapPin />
            Gebang, Kab.Cirebon, Indonesia
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:item-center mb-2">
          <a
            href="https://www.linkedin.com/in/budi-setiawan-7462741b2/"
            target="blank"
            className="flex items-center gap-2 text-base font-semibold leading-relaxed p-2 rounded-sm text-gray-900 hover:bg-gray-100"
          >
            <TbBrandLinkedin />
            Budi Setiawan
          </a>
          <a
            href="https://github.com/budayyy"
            target="blank"
            className="flex items-center gap-2 text-base font-semibold leading-relaxed p-2 rounded-sm text-gray-900 hover:bg-gray-100"
          >
            <TbBrandGithub />
            budayyy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
