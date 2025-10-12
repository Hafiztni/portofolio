import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, showcases, } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import LogoLoop from "./components/LogoLoop/LogoLoop";
import PortfolioGallery from "./components/PortfolioGallery";
import SpotlightCard from './components/SpotlightCard/SpotlightCard.jsx';
import TrueFocus from './components/TrueFocus/TrueFocus.jsx';


// ..
AOS.init();

function App() {
  
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

    const imageLogos = [
    { src: "./assets/contact/wa.png", alt: "WhatsApp", href: "https://wa.me/123" },
    { src: "./assets/contact/ig.png", alt: "Instagram", href: "https://instagram.com/" },
    { src: "./assets/contact/fb.png", alt: "Facebook", href: "https://facebook.com/" },
    { src: "./assets/contact/be.png", alt: "Behance", href: "https://behance.net/" },
    { src: "./assets/contact/link.png", alt: "LinkedIn", href: "https://linkedin.com/" },
  ];

  // -------------------------



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
<div className="flex items-center gap-1 mb-3 bg-zinc-800 w-fit p-1 rounded-lg text-">
  <TrueFocus
    sentence="Graphic Design"
    manualMode={false}
    blurAmount={5}
    borderColor="red"
    animationDuration={2}
    pauseBetweenAnimations={1}
  />
</div>

            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Hafizt" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate and enthusiastic graphic designer with a deep love creativity. Thrives challenges and new expriences, consistently 
              striving to deliver modern, and impactful visual solutions. Committed to growth through innovative, creative, and needs-oriented design."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Faris_Edrik_Prayoga_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-2s">
            <ProfileCard
              name="Hafizt Nur Ikhsan"
              title="Graphic Designer"
              handle="fitztaavic"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/me/hafizt.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>

{/* LogoLoop */}
        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
            marginTop: "200px",
            width: "100%",
          }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={20}
            direction="right"
            logoHeight={55}
            gap={90}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#222"
            ariaLabel="Technology partners"
          />
        </div>

        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Hafizt Nur Ikhsan, a creative graphic designer focused on crafting modern, distinctive, and functional visuals. I enjoy exploring design trends, typography, and branding, blending aesthetics with strategy to deliver meaningful works."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      40<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                </div>



              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
  <h1
    className="text-4xl/snug font-bold mb-4"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Tools & Technologies
  </h1>
  <p
    className="w-full sm:w-2/5 text-base/loose opacity-50"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    My Professional Skills
  </p>

  <div className="tools-box mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {listTools.map((tool) => (
      <div
        key={tool.id}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={tool.dad}
        data-aos-once="true"
        className="flex items-center gap-3 p-3 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
      >
        <img
          src={tool.gambar}
          alt="Tools Image"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
        />
        <div className="flex flex-col overflow-hidden">
          <div className="truncate">
            <ShinyText
              text={tool.nama}
              disabled={false}
              speed={3}
              className="text-sm sm:text-base font-semibold block"
            />
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 truncate">{tool.ket}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Certificate</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a collection of certificates that reflect my skills, creativity, and passion in every work</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}

<div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="mt-24">
  <PortfolioGallery />
</div>


{/* Experience Section */}
<div
  className="min-h-screen text-white flex flex-col items-center px-6"
  data-aos="fade-up"
>
  <h1 className="text-4xl font-bold text-center mb-15 mt-35">
    My Highlights
  </h1>

  <div className="w-full flex justify-center">
    <div
      className="
        flex gap-6 overflow-x-auto pb-10 w-full max-w-7xl snap-x snap-mandatory scrollbar-hide justify-center
        md:flex-row
        flex-col items-center md:items-stretch md:overflow-x-auto
      "
    >
      {[1, 2, 3].map((i) => (
<SpotlightCard
  key={i}
  className="
    custom-spotlight-card snap-center flex-shrink-0
    w-[300px] h-[400px] relative overflow-hidden
  "
  spotlightColor="rgba(0, 229, 255, 0.2)"
  data-aos="fade-up"
>

          <img
            src="./assets/star.png"
            alt={`Spotlight ${i}`}
            className="absolute top-6 left-6 w-16 h-16 object-contain animate-[glow_2s_ease-in-out_infinite]"
            style={{
              filter: `drop-shadow(0 0 10px ${
                ["#00FFFF", "#00FFAA", "#00E5FF"][i - 1]
              })`,
              animationDelay: `${i * 0.3}s`,
            }}
          />

          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <h2 className="text-xl font-semibold mb-2">
              {`Spotlight ${i}`}
            </h2>
            <p className="text-gray-400 text-sm">
              {[
                "Creative Design Projects showcasing visual identity and branding work.",
                "Frontend Development focusing on modern UI with React & Tailwind.",
                "Collaborative Works that highlight teamwork and creative direction.",
              ][i - 1]}
            </p>
          </div>
        </SpotlightCard>
      ))}
    </div>
  </div>
</div>
{/* Experience Section */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
 
            {/* Contact Form di kanan */}
            

        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App