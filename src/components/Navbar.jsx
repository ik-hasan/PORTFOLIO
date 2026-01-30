import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = ()=>{
  const [menu,setmenu]=useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="lg:ml-7">
          <a href="#" className="text-3xl font-bold text-white">
            Ikramul
            <span className="text-purple">Hasan</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">

          <a href="#home" className="relative text-white/80 transition duration-300 hover:text-purple group">
          <span>Home</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a href="#about" className="relative text-white/80 transition duration-300 hover:text-purple group">
          <span>About</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#skills" className="relative text-white/80 transition duration-300 hover:text-purple group">
          <span>Skills</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#projects" className="relative text-white/80 transition duration-300 hover:text-purple group">
          <span>Projects</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#experience" className="relative text-white/80 transition duration-300 hover:text-purple group">
          <span>Experinece</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="relative text-white/80 transition duration-300 hover:text-purple group">
          <span>contact</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

        <div className="md:hidden">
          {
            menu 
            ?<FaXmark className="text-2xl cursor-pointer"onClick={()=>{setmenu(false)}}/> :<FaBars className="text-2xl cursor-pointer" onClick={()=>{setmenu(true)}}/>
          }
        </div>
      </div>

      { 
        menu 
        &&<div className="flex justify-center ">
            <div className="md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col justify-center items-center w-70 h-140 gap-6 backdrop-blur-sm">

            <a href="#home" className="relative text-white/80 transition duration-300 hover:text-purple group"onClick={()=>{setmenu(false)}}>
              <span>Home</span>
              </a>
              
              <a href="#about" className="relative text-white/80 transition duration-300 hover:text-purple group"onClick={()=>{setmenu(false)}}>
              <span>About</span>
              </a>

              <a href="#skills" className="relative text-white/80 transition duration-300 hover:text-purple group"onClick={()=>{setmenu(false)}}>
              <span>Skills</span>
              </a>

              <a href="#projects" className="relative text-white/80 transition duration-300 hover:text-purple group"onClick={()=>{setmenu(false)}}>
              <span>Projects</span>
              </a>

              <a href="#experience" className="relative text-white/80 transition duration-300 hover:text-purple group"onClick={()=>{setmenu(false)}}>
              <span>Experinece</span>
              </a>

              <a href="#contact" className="relative text-white/80 transition duration-300 hover:text-purple group"onClick={()=>{setmenu(false)}}>
              <span>contact</span>
              </a>

          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar;