import React from 'react';


const About = () => {
    return (
        <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    Hello, my name is Brice Patchou. I am currently a Junior studying Computer Science and Business Administration. One important thing you should know about me is that I am the type of person who loves to optimize my life using computer science. I enjoy learning new ways to improve my skills and simplify repetitive tasks. Recently, I learned how to use the FPDF library to create PDF cover letters automatically, which saved me a lot of time. My ultimate career goal is to use my skills to contribute to a product that can positively impact the world.
                </p>

                <br />

                <p className='text-xl'>
                    I absolutely adore hanging out with my friends and family whenever I'm not working on my side project. I'm a big fan of playing basketball with my buddies and enjoying a game of Monopoly with my siblings. I also love hitting the gym regularly and pumping some iron. It's always more fun with a friend, but I don't mind working out alone either!
                </p>
            </div>
        </div>
    )
}

export default About