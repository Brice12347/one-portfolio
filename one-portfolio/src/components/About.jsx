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
                Hello, my name is Brice Patchou. I am a senior studying Computer Science and Business Administration. I’m passionate about using technology to make a positive impact on those around me. As a Software Engineering Intern at Boeing, I developed unit tests in C# and authored a comprehensive guide to improve collaboration and code reliability across teams—an experience that taught me the value of scalable, well-documented solutions. My ultimate goal is to contribute to projects that drive meaningful change and empower the people around me.
                </p>

                <br />

                <p className='text-xl'>
                    I absolutely adore hanging out with my friends and family whenever I'm not working on my side project. I'm a big fan of playing basketball with my friends and enjoying a game of Monopoly with my siblings. I also love hitting the gym regularly and pumping some iron. It's always more fun with a friend, but I don't mind working out alone either!
                </p>
            </div>
        </div>
    )
}

export default About