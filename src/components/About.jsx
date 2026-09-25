import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
          Get to know more about my background and passion
        </p>

        <div className="flex items-center justify-center text-center md:mx-39">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-full rounded-2xl p-8">
              <p className="text-gray-300 mb-6">
              I’m a final-year B.Tech student in Information Technology at NIT Srinagar 
              with hands-on experience in software development and scalable systems. 
              I have a solid foundation in programming, data structures, databases, 
              operating systems, and object-oriented design.
              </p>
              <p className="text-gray-300 mb-6">
              Secured All India Rank 1 at the Flipr Generative AI National Hackathon and Global Rank 20 at HackerRank Infinity Hacks, competing against 64 teams and 1,500+ teams respectively, with solutions spanning Generative AI, RAG, knowledge graphs, and intelligent systems.
              </p>
              <p className="text-gray-300 mb-12 ">
              My current focus is on Low-Level Design and Distributed Systems,
               with an emphasis on designing scalable, reliable, and efficient
                software.
                I’m currently exploring software engineering opportunities 
                where I can apply my skills, learn from experienced engineers, 
                and contribute to real-world products.
              </p>
            </div>
          </motion.div>
        </div>
        {/* cards */}
        <div className="flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:mx-39">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="bg-dark-300 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="text-purple text-4xl mb-4">{<data.icon/>}</div>
                  <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                  <p className="text-gray-400">{data.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
