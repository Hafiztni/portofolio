import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
  ${active ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent backdrop-blur-0"}
  py-2 flex items-center justify-between px-6 md:px-12`}
>


      {/* Logo */}
<div className="logo hidden md:block">
  <h1 className="text-3xl font-bold text-white">
    Portofolio
  </h1>
</div>


      {/* Menu */}
      <ul
        className={`flex items-center sm:gap-10 gap-4 
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
          md:opacity-100 bg-white/10 backdrop-blur-md 
          md:bg-transparent md:backdrop-blur-none
          p-4 rounded-br-2xl rounded-bl-2xl 
          transition-all md:transition-none
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
        <li><a href="#project" className="sm:text-lg text-base font-medium">Project</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
