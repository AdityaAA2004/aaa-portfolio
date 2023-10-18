import React from 'react';


const Portfolio = () => {
    const projects= [
        {
            id:1,
            projectName: "Amazon Clone",
            projectImage: require('../assets/amazon-clone.png'),
            projectLink: 'https://my-amazon-clone-adiaa.vercel.app/',
        },
        {
            id:2,
            projectName: "LinkedIn Clone",
            projectImage: require('../assets/linkedin-clone.png'),
            projectLink: 'https://linkedin-clone-693dd.web.app',
        },

    ];

    const clickHandler = (link) => {
        window.location.href = link;
    }

    return (
    <div name="portfolio" className='bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 w-screen text-white lg:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full'>
            <div className='pb-3'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Portfolio</p>
                <p className='py-10 text-xl'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-3'>
                
                {projects.map(({id,projectName,projectImage,projectLink},ind)=>
                (   <div key={id} className='flex flex-col items-center justify-start'>
                    <p className=' text-md font-bold inline border-b-4 border-blue-500 text-center text-2xl'>{projectName}</p>
                    <div className=' shadow-md shadow-blue-400 rounded-xl mt-10'>
                    <img src={projectImage} alt={projectName} className=' max-h-full max-w-full aspect-square rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration:200 hover:scale-105 text-xl' onClick={()=> clickHandler(projectLink)}>Demo</button>
                    </div>
                </div>  
                </div>
                ))}
                
            </div>
        </div>
    </div>
    );
}


export default Portfolio;