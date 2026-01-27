import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                 <a href='#' className='text-3xl font-bold text-white'>
                    João
                    <span className='text-purple'>Victor</span>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            {/* Botões mobile */}
            <div className='md:hidden'>
                {
                    showMenu ? 
                    <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-3xl text-white cursor-pointer'/> 
                    :
                    <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-3xl text-white cursor-pointer'/>
                }
            </div>
        </div>

        {/* Menu mobile */}
        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 rounded-lg p-6 flex flex-col space-y-6 text-center'>
                      <a onClick={()=>setShowMenu(!showMenu)} href="#home" className='text-white/80 text-lg transition duration-300 hover:text-purple'>
                        <span>Home</span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#about" className='text-white/80 text-lg transition duration-300 hover:text-purple'>
                        <span>About</span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className='text-white/80 text-lg transition duration-300 hover:text-purple'>
                        <span>Skills</span>
                    </a>

                    {/* <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className='text-white/80 text-lg transition duration-300 hover:text-purple'>
                        <span>Projects</span>
                    </a> */}

                    <a onClick={()=>setShowMenu(!showMenu)} href="#experience" className='text-white/80 text-lg transition duration-300 hover:text-purple'>
                        <span>Experience</span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className='text-white/80 text-lg transition duration-300 hover:text-purple'>
                        <span>Contact</span>
                    </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar