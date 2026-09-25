import { createElement } from "react";
import { FaLightbulb, FaPaintBrush, FaCode, FaStripe,  FaVuejs, FaFire, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiC, SiCplusplus, SiPostman, SiCloudinary, SiThealgorithms, SiRender, SiNetlify, SiRabbitmq, SiDocker, SiGithub, SiSocketdotio, SiTypescript, SiPython, SiOpenai, SiAmazonwebservices  } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaVrCardboard  } from "react-icons/fa";
import { TbSql } from "react-icons/tb";



import profileImg from '../assets/portfolio_pic.jpeg';
import projectImg1 from '../assets/assistant.webp';
import projectImg2 from '../assets/botKR.jpg';
import projectImg3 from '../assets/world.png';
import projectImg4 from '../assets/portfolio.jpg';
import riscv from '../assets/riscv.png';
import digital_signal from '../assets/digital_signal.png';
import web_testing from '../assets/web_testing.png'; 



export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I spend my time on creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];


const PlaywrightIcon = (props) =>
  createElement(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    createElement("path", {
      d: "M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z",
    })
  );

const RedisIcon = (props) =>
  createElement(
    "svg",
    {
      viewBox: "0 0 128 128",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      ...props,
    },
    createElement(
      "mask",
      { id: "redis-skill-icon" },
      createElement("rect", { width: "128", height: "128", fill: "#fff" }),
      createElement("path", { fill: "#000", d: "M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z" }),
      createElement("ellipse", { fill: "#000", cx: "38.4", cy: "35.4", rx: "15.5", ry: "6" })
    ),
    createElement(
      "g",
      { mask: "url(#redis-skill-icon)" },
      createElement("path", { d: "M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z" }),
      createElement("path", { d: "M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z" }),
      createElement("path", { d: "M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z" }),
      createElement("path", { d: "M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 79.6 13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z" }),
      createElement("path", { d: "M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4z" }),
      createElement("path", { d: "M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z" }),
      createElement("path", { d: "M93.3 27.7l17.2 6.8-17.2 6.8z" }),
      createElement("path", { d: "M74.3 35.3l19-7.6v13.6l-1.9.8z" })
    )
  );

export const skills = [
  { icon: SiC, name:"C" },
  { icon: SiCplusplus, name:"C++" },
  { icon: FaJs, name:"JS" },
  { icon: SiTypescript, name:"TYPESCRIPT" },
  { icon: SiPython, name:"PYTHON" },
  { icon: TbSql , name:"SQL" },
  { icon: FaHtml5, name:"HTML" },
  { icon: FaCss3Alt, name:"CSS" },
  { icon: SiTailwindcss, name:"TAILWIND" },
  { icon: FaReact, name:"REACT" },
  { icon: FaNodeJs, name:"NODE" },
  { icon: SiExpress, name:"EXPRESS" },
  { icon: SiMongodb, name:"MONGODB" },
  { icon: SiCloudinary , name:"CLOUDINARY" },
  { icon: SiThealgorithms  , name:"ALGORITHMS" },
  { icon: FaVrCardboard, name:"VR" },
  { icon: FaGitAlt, name:"GIT" },
  { icon: SiGithub, name:"GITHUB" },
  { icon: SiPostman, name:"POSTMAN" },
  { icon: SiRender   , name:"RENDER" },
  { icon: SiNetlify  , name:"NETLIFY" },
  { icon: PlaywrightIcon, name:"PLAYWRIGHT" },
  { icon: SiRabbitmq, name:"RABBITMQ" },
  { icon: RedisIcon, name:"REDIS" },
  { icon: SiDocker, name:"DOCKER" },
  { icon: SiSocketdotio, name:"SOCKET.IO" },
  { icon: SiOpenai, name:"LLM" },
  { icon: FaCloud, name:"CLOUD" },
];


export const projects = [
  {
    title: "Autonomous Distributed Website Testing Platform",
    description: "QA writes the journey once in English. The platform walks the live product, saves a real test, and re-runs it after every change — so nobody has to click the same routes by hand again.",
    image: web_testing,
    tech: ["React", "TypeScript", "Socket.io", "Node.js", "Express.js", "MongoDB", "Redis", "RabbitMQ", "Playwright", "Google Gemini API", "Docker"],
    demo: "https://github.com/ik-hasan/AI_POWERED_AUTONOMOUS_WEBSITE_TESTING_PLATFORM_DS",
    code: "https://github.com/ik-hasan/AI_POWERED_AUTONOMOUS_WEBSITE_TESTING_PLATFORM_DS",
  },
  {
    title: "Virtual Assistant",
    description: "A smart virtual assistant system with voice/text interaction, task automation, real-time responses, and AI-powered features for efficient user support.",
    image: projectImg1,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js","Tailwind","JWT","Gemini API","WebSpeech API","Render"],
    demo: "https://iks-assistant.onrender.com",
    code: "https://github.com/ik-hasan/VIRTUAL_ASSISTANT",
  },
  {
    title: "KR.AI– Autonomous Meeting Intelligence Agent",
    description: "an AI assistant that converts unstructured meeting conversations into actionable insights using GenAI and LLMs.",
    image: projectImg2,
    tech: ["React.js", "FastAPI", "Tailwind CSS", "Python","Render","Vercel","Open Router","OpenAi","Assembly API"],
    demo: "https://krai-meeting-bot-edjc.vercel.app/",
    code: "https://github.com/ik-hasan/KR.AI_MEETING_BOT",
  },
  {
    title: "World Atlas",
    description: "An interactive World Atlas web application that provides detailed country information with a user-friendly interface.",
    image: projectImg3,
    tech: ["React.js", "Vite","Tailwind", "Countries API", "Netlify"],
    demo: "https://world-atlas-ik.netlify.app/",
    code: "https://github.com/ik-hasan/World_Atlas_IK",
  },
  {
    title: "RISC-V Simulator",
    description: "A C++ based RISC-V simulator that parses assembly programs and simulates a 5-stage CPU pipeline (IF, ID, EX, MEM, WB) with register, memory, and branch handling.",
    image: riscv,
    tech: [
      "C++",
      "RISC-V ISA",
      "Assembly Language",
      "Data Structures",
      "OOPS",
      "File Handling",
      "CPU Architecture",
      "GNUPlot"
    ],
    demo: "https://github.com/ik-hasan/RISC-V-Simulator", 
    code: "https://github.com/ik-hasan/RISC-V-Simulator",
  },
  {
    title: "Digital Signal Generator",
    description: "A C++ based console application that encodes, visualizes, and decodes digital signals using various line encoding schemes. Also supports analog-to-digital conversion via PCM and Delta Modulation.",
    image: digital_signal,
    tech: [
      "C++",
      "STL"
    ],
    demo: "https://github.com/ik-hasan/Data-Communication---Digital-Signal-Generator", 
    code: "https://github.com/ik-hasan/Data-Communication---Digital-Signal-Generator",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio to showcase projects, skills, and blogs.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion","EmailJs"],
    demo: "#home",
    code: "https://github.com/ik-hasan/PORTFOLIO",
  },

];


export const workData = [
  {
    role: "Research Intern",
    company: "IIT Mandi",
    duration: "Dec 2025 - Jan 2026",
    description:
      "Developed immersive VR-based storytelling environments,  systematically customizing virtual scenes, characters,  interactions, and animations to ensure consistency with the  experimental hypotheses and research objectives. In  parallel, implemented web-based components using the MERN stack to  support the digital infrastructure and experimental workflow.",
    color: "purple"
  },
  {
    role: "Graphic Designer",
    company: "TEDx Team, NIT Srinagar",
    duration: "Oct 2025 - Present",
    description:
      "Designed creative posters and visual content for events and promotions, focusing on visual appeal, branding, and clear communication.",
    color: "pink"
  },

];


export default {profileImg,aboutInfo,projects,workData}
