import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
          Technologies I work with to bring ideas to life
        </p>

        {/* cards */}
        <div className="flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex gap-5 flex-wrap justify-center lg:mx-30 lg:gap-7">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-dark-300 text-purple hover:bg-purple hover:text-white rounded-2xl p-6 hover:-translate-y-2 transition duration-300  cursor-pointer group relative mb-3"
                >
                  <div className="flex flex-col items-center">
                    <skill.icon className="w-12 h-12" />
                    <span className="absolute top-27 opacity-0 group-hover:opacity-100 transition duration-300 text-white text-md font-semibold rounded">
                    {skill.name}
                  </span>
                  </div>
                </div>
                
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
