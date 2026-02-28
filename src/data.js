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

import Proyek1 from "/assets/sertif/BasicHtml.jpg";
import Proyek2 from "/assets/sertif/FundamentalFrontEnd.png";
import Proyek3 from "/assets/sertif/CloudAws.png";
import Proyek4 from "/assets/sertif/Magang.jpeg";
import Proyek5 from "/assets/sertif/GraphicDesign.jpeg";
import Proyek6 from "/assets/sertif/BasicAi.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Certificate of Basic Web Programming",
    subtitle: "Completed through Dicoding Indonesia Platform",
    fullDescription:"This certificate demonstrates foundational knowledge of web programming, including HTML, CSS, and basic JavaScript to build responsive and interactive web pages.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Certificate of Front-End Development Fundamentals",
    subtitle: "Completed through Dicoding Indonesia Platform",
    fullDescription:"This certificate demonstrates foundational knowledge of front-end development, including HTML, CSS, and JavaScript to build responsive and interactive web interfaces.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Certificate of Basic AWS Cloud Learning",
    subtitle: "Completed through Dicoding Indonesia Platform",
    fullDescription: "This certificate demonstrates foundational knowledge of AWS Cloud services, including core infrastructure, deployment, and basic cloud architecture principles.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 4,
    image: Proyek6,
    title: "Certificate of Basic AI Learning",
    subtitle: "Completed through Dicoding Indonesia Platform",
    fullDescription: "This certificate signifies a foundational understanding of AI concepts and applications, including machine learning, data processing, and AI algorithms.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 5,
    image: Proyek4,
    title: "Certificate of Graphic Design and Product Finishing Internship",
    subtitle: "Completed at New Radja Printing",
    fullDescription:"This certificate acknowledges the successful completion of an internship program focused on graphic design and product finishing. The program provided hands-on experience in visual communication, digital design tools, and practical finishing techniques used in the printing industry.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 6,
    image: Proyek5,
    title: "Certificate of Competency in Graphic Design",
    subtitle: "Issued by LSP and National Professional Certification Board (BNSP) Indonesia",
    fullDescription:"This certificate verifies professional competency in the field of graphic design, based on the national work competency standards (SKKNI). Certified by the Professional Certification Institute (LSP) under the National Professional Certification Board (BNSP), this recognition confirms the ability to create effective visual communication using industry-standard design principles, tools, and practices.",
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
      { src: "./assets/porto/SocialMedia/8.jpeg", alt: "Social Media 8" },
      { src: "./assets/porto/SocialMedia/9.jpg", alt: "Social Media 9" },
      { src: "./assets/porto/SocialMedia/10.png", alt: "Social Media 10" },
      { src: "./assets/porto/SocialMedia/11.png", alt: "Social Media 11" },
    ],
  },
  {
    id: 2,
    title: "Flyer",
    width: 220,
    height: 310,
    images: [
      { src: "./assets/porto/Poster/6.png", alt: "Flyer 1" },
    ],
  },
  {
    id: 3,
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
    id: 4,
    title: "Packaging",
    width: 320,
    height: 210,
    images: [
      { src: "./assets/porto/Packaging/1.jpg", alt: "Packaging 1" },
      { src: "./assets/porto/Packaging/2.jpg", alt: "Packaging 2" },
      { src: "./assets/porto/Packaging/3.jpg", alt: "Packaging 3" },
      { src: "./assets/porto/Packaging/4.jpg", alt: "Packaging 4" },
      { src: "./assets/porto/Packaging/5.jpg", alt: "Packaging 5" },
      { src: "./assets/porto/Packaging/6.jpg", alt: "Packaging 6" },
    ],
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
    title: "Apparel",
    width: 220,
    height: 310,
    images: [
      { src: "./assets/porto/Apparel/1.jpg", alt: "Apparel 1" },
      { src: "./assets/porto/Apparel/2.jpg", alt: "Apparel 2" },
    ],
  },
  {
    id: 8,
    title: "UI/UX",
    width: 220,
    height: 310,
    images: [
      { src: "./assets/porto/Ui/1.png", alt: "UI/UX 1" },
    ],
  },
  {
    id: 9,
    title: "Video Editing",
    width: 220,
    height: 310,
    images: [
      { src: "./assets/porto/sigma_education.mp4", alt: "Sigma Education Video" },
    ],
  },
];
// =======================
// SPOTLIGHT DATA
// =======================

import StarIcon from "/assets/star.png";

export const spotlightData = [
  {
    id: 1,
    title: "Graphic Design Intern & Product Finishing",
    desc: "June - December 2024 (New Radja Printing)",
    color: "rgba(0, 229, 255, 0.2)",
    img: StarIcon,
  },
  {
    id: 2,
    title: "Freelance Graphic Designer",
    desc: "April 2023 - May 2025 (Upwork & Fiverr)",
    color: "rgba(0, 255, 170, 0.2)",
    img: StarIcon,
  },
  {
    id: 3,
    title: "Freelance Graphic Designer & Video Editor",
    desc: "June 2025 - August 2025 (Sigma Education)",
    color: "rgba(255, 200, 0, 0.2)",
    img: StarIcon,
  },
];
