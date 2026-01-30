import { motion } from "framer-motion";
import {
  FaCode,
  FaDribbble,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

//install emailjs-com
//sign up in emailJs
//create service - here we'll service_id
//create & design template accordng to you - here we'll get template_id
//go to account - here - we'll get public_key

const Contact = () => {

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Message sent successfully!");
    })
    .catch((error) => {
      console.log(error)
      toast.error("Failed to send message!");
    });

    e.target.reset();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200 "
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 cursor-auto"
                >
                  Your Name
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                  required      
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 cursor-auto"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  required      
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 cursor-auto"
                >
                  Your message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  id="message"
                  name="message"
                  required      
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:ml-50 lg:mt-10">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">ikramul7388@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91-9596455297</p>
                <p className="text-gray-400">+91-7388188588</p>
              </div>
            </div>

            {/* social profiles */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/ik-hasan"
                  target="_blank"
                  className="group relative w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 hover:-translate-y-1"
                >
                  <FaGithub />
                  <span className="absolute top-15 opacity-0 group-hover:opacity-100 transition duration-300  text-white text-xs px-2 py-1 rounded">
                    GitHub
                  </span>
                </a>


                <a
                  href="https://www.linkedin.com/in/ikramul-hasan/"
                  target="_blank"
                  className="group relative w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin />
                  <span className="absolute top-15 opacity-0 group-hover:opacity-100 transition duration-300  text-white text-xs px-2 py-1 rounded">
                    LinkedIn
                  </span>
                </a>


                <a
                  href="https://www.instagram.com/_ikramul_hasan__?igsh=MW9wcXFhb3M2ejBibg=="
                  target="_blank"
                  className="group relative w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 hover:-translate-y-1"
                >
                  <FaInstagram />
                  <span className="absolute top-15 opacity-0 group-hover:opacity-100 transition duration-300  text-white text-xs px-2 py-1 rounded">
                    Instagram
                  </span>
                </a>


                <a
                  href="https://leetcode.com/u/ik_hasan/"
                  target="_blank"
                  className="group relative w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 hover:-translate-y-1"
                >
                  <FaCode />
                  <span className="absolute top-15 opacity-0 group-hover:opacity-100 transition duration-300 text-white text-xs px-2 py-1 rounded">
                    LeetCode
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
