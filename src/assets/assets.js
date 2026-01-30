import { FaLightbulb, FaPaintBrush, FaCode, FaStripe,  FaVuejs, FaFire, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiC, SiCplusplus, SiPostman,SiCloudinary,SiThealgorithms,SiRender,SiNetlify } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,FaVrCardboard  } from "react-icons/fa";
import { TbSql } from "react-icons/tb";



import profileImg from '../assets/portfolioImage2.jpeg';
import projectImg1 from '../assets/assistant.webp';
import projectImg2 from '../assets/botKR.jpg';
import projectImg3 from '../assets/world.png';
import projectImg4 from '../assets/portfolio.jpg';



export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
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


export const skills = [
  { icon: FaHtml5, name:"HTML" },
  { icon: FaCss3Alt, name:"CSS" },
  { icon: SiTailwindcss, name:"TAILWIND" },
  { icon: FaJs, name:"JS" },
  { icon: FaReact, name:"REACT" },
  { icon: FaNodeJs, name:"NODE" },
  { icon: SiMongodb, name:"MONGODB" },
  { icon: SiExpress, name:"EXPRESS" },
  { icon: SiCloudinary , name:"CLOUDINARY" },
  { icon: SiC, name:"C" },
  { icon: SiCplusplus, name:"C++" },
  { icon: SiThealgorithms  , name:"ALGORITHMS" },
  { icon: FaVrCardboard, name:"VR" },
  { icon: FaGitAlt, name:"GIT" },
  { icon: SiPostman, name:"POSTMAN" },
  { icon: TbSql , name:"SQL" },
  { icon: SiRender   , name:"RENDER" },
  { icon: SiNetlify  , name:"NETLIFY" },
];


export const projects = [
  {
    title: "Virtual Assistant",
    description: "A smart virtual assistant system with voice/text interaction, task automation, real-time responses, and AI-powered features for efficient user support.",
    image: projectImg1,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js","Tailwind","JWT","Gemini API","WebSpeech API","Render"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://virtualassistant-cuzv.onrender.com",
    code: "https://github.com/ik-hasan/VIRTUAL-ASSISTANT",
  },
  {
    title: "KR.AI– Autonomous Meeting Intelligence Agent",
    description: "an AI assistant that converts unstructured meeting conversations into actionable insights using GenAI and LLMs.",
    image: projectImg2,
    tech: ["React.js", "FastAPI", "Tailwind CSS", "Python","Render","Vercel","Open Router","OpenAi","Assembly API"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://krai-meeting-bot-edjc.vercel.app/",
    code: "https://github.com/ik-hasan/KR.AI_MEETING_BOT",
  },
  {
    title: "World Atlas",
    description: "An interactive World Atlas web application that provides detailed country information with a user-friendly interface.",
    image: projectImg3,
    tech: ["React.js", "Vite","Tailwind", "Countries API", "Netlify"],
    icons: [FaReact, FaDatabase],
    demo: "https://world-atlas-ik.netlify.app/",
    code: "https://github.com/ik-hasan/World_Atlas_IK",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio to showcase projects, skills, and blogs.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion","EmailJs"],
    icons: [FaReact, FaCloud],
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