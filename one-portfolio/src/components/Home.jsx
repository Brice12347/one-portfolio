import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            {/* <img src={HeroImage} alt= 'picture of Brice Patchou'/> */}
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='mt-10 sm:mt-0 text-3xl sm:text-7xl font-bold text-white'>
                        I am a Computer Science Student
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have been coding since the 5th grade. Currently, I work as a Teaching Assistant, where I help teach a C++ class of 400 students with topics ranging from Object Oriented Programming to Recursion.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Porfolio
                            <span className=' group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt='Brice patchou' className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
                </div>
            </div>
        </div>
    )
}

export default Home