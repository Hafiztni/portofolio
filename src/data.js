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
    gambar: Tools9,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools6,
    nama: "Blender",
    ket: "3D",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools7,
    nama: "Html",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Css",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Github",
    ket: "Repository",
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

export const showcases = [
  {
    id: 1,
    title: "Social Media Posts",
    width: 210,
    height: 350,
    images: [
      { src: "./assets/porto/SocialMedia/1.jpg", alt: "Social Media 1" },
      { src: "./assets/porto/SocialMedia/2.jpg", alt: "Social Media 2" },
      { src: "./assets/porto/SocialMedia/3.jpg", alt: "Social Media 3" },
      { src: "./assets/porto/SocialMedia/4.png", alt: "Social Media 4" },
      { src: "./assets/porto/SocialMedia/5.png", alt: "Social Media 5" },
      { src: "./assets/porto/SocialMedia/6.png", alt: "Social Media 6" },
      { src: "./assets/porto/SocialMedia/7.png", alt: "Social Media 7" },
      { src: "./assets/porto/SocialMedia/8.png", alt: "Social Media 8" },
      { src: "./assets/porto/SocialMedia/9.jpg", alt: "Social Media 9" },
      { src: "./assets/porto/SocialMedia/510.png", alt: "Social Media 10" },
    ],
  },
  {
    id: 2,
    title: "Poster",
    width: 220,
    height: 310,
    images: [
      { src: "./assets/porto/Poster/1.jpg", alt: "Poster 1" },
      { src: "./assets/porto/Poster/2.jpg", alt: "Poster 2" },
      { src: "./assets/porto/Poster/3.jpg", alt: "Poster 3" },
      { src: "./assets/porto/Poster/4.png", alt: "Poster 4" },
      { src: "./assets/porto/Poster/5.jpg", alt: "Poster 5" },
    ],
  },
  {
    id: 3,
    title: "Packaging",
    width: 320,
    height: 210,
    images: [
      { src: "./assets/porto/Packaging/1.jpg", alt: "Packaging 1" },
      { src: "./assets/porto/Packaging/2.jpg", alt: "Packaging 2" },
      { src: "./assets/porto/Packaging/3.jpg", alt: "Packaging 3" },
      { src: "./assets/porto/Packaging/4.jpg", alt: "Packaging 4" },
      { src: "./assets/porto/Packaging/5.jpg", alt: "Packaging 5" },
    ],
  },
  {
    id: 4,
    title: "Chibi Characters",
    width: 320,
    height: 210,
    images: [
      { src: "./assets/porto/Chiby/1.jpg", alt: "Chibi 1" },
      { src: "./assets/porto/Chiby/2.jpg", alt: "Chibi 2" },
      { src: "./assets/porto/Chiby/3.jpg", alt: "Chibi 3" },
      { src: "./assets/porto/Chiby/4.jpg", alt: "Chibi 4" },
      { src: "./assets/porto/Chiby/5.jpg", alt: "Chibi 5" },
    ],
  },
  {
    id: 5,
    title: "Livery And Decal",
    width: 320,
    height: 210,
    images: [
      { src: "./assets/porto/Livery/1.png", alt: "Livery 1" },
      { src: "./assets/porto/Livery/2.png", alt: "Livery 2" },
      { src: "./assets/porto/Livery/3.png", alt: "Livery 3" },
      { src: "./assets/porto/Livery/4.png", alt: "Livery 4" },
    ],
  },
  {
    id: 6,
    title: "Apparel",
    width: 220,
    height: 310,
    images: [
      { src: "./assets/porto/Apparel/1.jpg", alt: "Apparel 1" },
      { src: "./assets/porto/Apparel/2.jpg", alt: "Apparel 2" },
    ],
  },
];
