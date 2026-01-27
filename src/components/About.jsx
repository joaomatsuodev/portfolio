import React from 'react'
import { motion } from 'framer-motion' 
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return(
        <motion.div
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                {/* Cabeçalho */}
                
                <h2 className='text-3xl font-bold text-center mb-4'>
                    About
                    <span className='text-purple'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Get to know more about my background and path
                </p>

                {/* imagem + minha jornada */}
                <div className='flex flex-col md:flex-row items-start gap-12'>

                    {/* Imagem */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img 
                            initial={{ opacity: 0, y:50 }}
                            whileInView={{ opacity:1, y:0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount:0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.profileImgJoaoVictor}
                        />
                    </div>

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, y:50 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount:0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2x1'>
                            <h3 className='text-2xl font-semibold mb-6'>
                                My Journey
                            </h3>
                            <p className='text-gray-300 mb-6'>
                                I’m a Full Stack Developer with over 4 years of experience working on web applications across front-end, back-end, and databases. My journey started with web fundamentals and quickly evolved into building and maintaining complete solutions in professional environments. Always focused on code quality and continuous improvement.
                            </p>
                            <p className='text-gray-300 mb-12'>
                                Currently, I work mainly with Java, React, and Oracle SQL, building and maintaining modern web applications in professional environments. Throughout my career, I’ve also worked with technologies such as PHP and Laravel, Python, jQuery, AJAX, MySQL, and cloud services like Amazon S3, which gave me a broad understanding of different stacks and architectures. I’m proactive, focused on practical results, and motivated by challenges that drive continuous learning and team collaboration.
                            </p>

                            {/* Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index)=>( /* Percorre por cada item gerado no assets */
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>
                                                {data.title}
                                            </h3>
                                            <p className='text-gray-400'>
                                                {data.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default About