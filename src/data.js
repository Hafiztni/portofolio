import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/premierepro.png";
import Tools2 from "/assets/tools/photoshop.png";
import Tools3 from "/assets/tools/coreldraw.png";
import Tools4 from "/assets/tools/canva.png";
import Tools5 from "/assets/tools/capcut.png";
import Tools6 from "/assets/tools/blender.png";
import Tools7 from "/assets/tools/html.png";
import Tools8 from "/assets/tools/css.png";
import Tools9 from "/assets/tools/js.png";
import Tools10 from "/assets/tools/github.png";

export const listTools = [

  {
    id: 1,
    gambar: Tools1,
    nama: "Premiere Pro",
    ket: "Video Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Photoshop",
    ket: "Photo Editing",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Corel Draw",
    ket: "Print Design",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Canva",
    ket: "Digital Design",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Capcut",
    ket: "Video Editing",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Blender",
    ket: "3D",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Html",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Css",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Github",
    ket: "Reposity",
    dad: "1000",
  },
];

import Proyek1 from "/assets/sertif/BasicAi.png";
import Proyek2 from "/assets/sertif/BasicHtml.jpg";
import Proyek3 from "/assets/sertif/Magang.jpeg";
import Proyek4 from "/assets/sertif/GraphicDesign.jpeg";


export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "AIS Detection App",
    subtitle: "A mobile application powered by Artificial Intelligence...",
    fullDescription:"A mobile application powered by Artificial Intelligence and Machine Learning, developed to assist in the early detection of Adolescent Idiopathic Scoliosis (AIS). By analyzing patient data and patterns, the app provides predictions that can help doctors and patients take preventive measures. This project demonstrates the role of AI in modern healthcare by improving accuracy, accessibility, and efficiency in medical diagnosis.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "IoT Air Quality Monitoring",
    subtitle: "A smart IoT system designed to measure and analyze air quality...",
    fullDescription:"A smart IoT system designed to measure and analyze air quality using sensors connected to a mobile application. The app provides real-time updates on air quality levels, empowering users to make healthier lifestyle decisions based on environmental conditions. This project showcases the potential of IoT in addressing environmental and public health issues.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "IoT Heartbeat Monitoring System",
    subtitle: "An IoT-based healthcare project developed to measure and monitor...",
    fullDescription:"An IoT-based healthcare project developed to measure and monitor heart rate in real-time. The system connects sensors to a local web server, enabling users and healthcare providers to track data directly from a web interface. This project highlights the integration of hardware and software to create efficient medical solutions that can be applied in local clinics or personal health monitoring.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "400",
  },
];
