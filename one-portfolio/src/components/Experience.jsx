import React from 'react';
import html from "../assets/html.png";
// import github from "../assets/github.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: "Next.Js",
            style: 'shadow-white'
        },
        {
            id: 7,
            src: python,
            title: "Python",
            style: 'shadow-yellow-300'
        }, {
            id: 8,
            src: c,
            title: "C++",
            style: 'shadow-blue-900'
        }, {
            id: 9,
            src: java,
            title: "Java",
            style: 'shadow-sky-900'
        },
    ]

    return (
        // bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white

        <div name='experience' className='w-full  bg-gradient-to-b from-gray-800 to-black text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' pt-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the software I have worked with</p>
                </div>

                <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        experiences.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }


                </div>
            </div>
        </div>
        // <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        //     <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        //         <div className='pb-8 '>
        //             <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        //                 About
        //             </p>
        //         </div>
        //         <p className='text-xl mt-20'>
        //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quis, nihil placeat iste et ipsa qui esse deserunt architecto dolorum nisi natus consectetur libero fuga provident adipisci officia! Recusandae, obcaecati? Repudiandae quas, ea facilis eligendi sunt ipsum voluptatum a quasi consequatur itaque alias harum! Officiis omnis esse voluptates nobis odio.
        //         </p>

        //         <br />

        //         <p className='text-xl'>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam possimus, sed quae, ullam fugit assumenda sequi ut ducimus dolorum tempore voluptatum molestias dolor. Modi dicta nam officiis? Corrupti, voluptate incidunt assumenda error natus eum, iusto earum optio porro quidem aut quos nulla quae est odit officiis, atque repudiandae nisi?
        //         </p>
        //     </div>
        // </div>

    )
}

export default Experience