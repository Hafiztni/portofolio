import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Judul - paling atas di mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Portofolio
        </h1>

{/* Ikon Sosmed - versi tombol bergaya */}
<div className="flex flex-col sm:flex-row gap-4 order-2 md:order-none">

  {/* Instagram Button */}
  <a
    href="https://www.instagram.com/fitztaavic"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-900/40 via-black/60 to-black/80 shadow-2xl hover:shadow-pink-500/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-pink-400/60 overflow-hidden flex items-center gap-4"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-pink-400/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500/30 to-pink-600/10 backdrop-blur-sm group-hover:from-pink-400/40 group-hover:to-pink-500/20 transition-all duration-300">
        <i className="ri-instagram-fill text-pink-400 text-2xl group-hover:text-pink-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"></i>
      </div>
      <div className="flex-1 text-left">
        <p className="text-pink-400 font-bold text-lg group-hover:text-pink-300 transition-colors duration-300 drop-shadow-sm">
          Instagram
        </p>
        <p className="text-pink-300/60 text-sm group-hover:text-pink-200/80 transition-colors duration-300">
          @fitztaavic
        </p>
      </div>
    </div>
  </a>

  {/* Behance Button */}
  <a
    href="https://www.behance.net/hafiztnurikhsan"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/40 via-black/60 to-black/80 shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-blue-400/60 overflow-hidden flex items-center gap-4"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/10 backdrop-blur-sm group-hover:from-blue-400/40 group-hover:to-blue-500/20 transition-all duration-300">
        <i className="ri-behance-fill text-blue-400 text-2xl group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"></i>
      </div>
      <div className="flex-1 text-left">
        <p className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors duration-300 drop-shadow-sm">
          Behance
        </p>
        <p className="text-blue-300/60 text-sm group-hover:text-blue-200/80 transition-colors duration-300">
          Hafizt Nur Ikhsan
        </p>
      </div>
    </div>
  </a>

  {/* Pinterest Button */}
  <a
    href="https://id.pinterest.com/fitztaavic/"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-red-500/30 bg-gradient-to-br from-red-900/40 via-black/60 to-black/80 shadow-2xl hover:shadow-red-500/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-red-400/60 overflow-hidden flex items-center gap-4"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 via-red-400/20 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/30 to-red-600/10 backdrop-blur-sm group-hover:from-red-400/40 group-hover:to-red-500/20 transition-all duration-300">
        <i className="ri-pinterest-fill text-red-400 text-2xl group-hover:text-red-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"></i>
      </div>
      <div className="flex-1 text-left">
        <p className="text-red-400 font-bold text-lg group-hover:text-red-300 transition-colors duration-300 drop-shadow-sm">
          Pinterest
        </p>
        <p className="text-red-300/60 text-sm group-hover:text-red-200/80 transition-colors duration-300">
          @fitztaavic
        </p>
      </div>
    </div>
  </a>
</div>


        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
