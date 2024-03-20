import React from 'react';
import joestable from '../assets/portfolio/joestable.png';
import marketplace from '../assets/portfolio/marketplace.png';
// import { Link } from "react-router-dom";
//import { Link } from "react-scroll";
const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: joestable,
            demo: "https://drive.google.com/file/d/1a4EKNgnv0HPPyRVUuPRrNR0pqo7-EAIh/view?usp=sharing",
            code: "https://gitfront.io/r/Brice12347/Cw1ffYgjrbjc/RestaurantReview/"


        },
        {
            id: 2,
            src: marketplace,
            demo: "https://drive.google.com/file/d/17rGa9qL0NlzrA8OdiXp8jEVrhshMwrNi/view?usp=share_link",
            code: "https://github.com/ShaneYokota72/Trojan_Marketplace"


        }

    ]

    return (
        <div name='portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen sm:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, code }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                                <div className='flex items-center justify-center'>
                                    <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                                    <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                                </div>
                            </div>

                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Portfolio