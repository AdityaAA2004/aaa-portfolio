import React from 'react'

function Experience() {
    const skills= [
        {
            id: 1,
            skillName: "HTML",
            skillLogo: require('../assets/html-logo.png'),
            shadeColor: 'shadow-md shadow-orange-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-orange-500"
        },
        {
            id: 2,
            skillName: "CSS",
            skillLogo: require('../assets/css-logo.png'),
            shadeColor: 'shadow-md shadow-blue-700 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-blue-700"
        },
        {
            id: 3,
            skillName: "JavaScript",
            skillLogo: require('../assets/js-logo.png'),
            shadeColor: 'shadow-md shadow-yellow-600 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-yellow-600"
        },
        {
            id: 4,
            skillName: "React.js and React Native",
            skillLogo: require('../assets/react-logo.png'),
            shadeColor: 'shadow-md shadow-blue-300 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-blue-300",
        },
        {
            id: 5,
            skillName: "Redux.js",
            skillLogo: require('../assets/redux-logo.png'),
            shadeColor: 'shadow-md shadow-violet-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-violet-500"
        },
        {
            id: 6,
            skillName: "Next.js",
            skillLogo: require('../assets/nextjs-logo.png'),
            shadeColor: 'shadow-md shadow-slate-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-slate-500"
        },
        {
            id: 7,
            skillName: "Firebase",
            skillLogo: require('../assets/firebase-logo.png'),
            shadeColor: 'shadow-md shadow-yellow-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-yellow-500"
        },
        {
            id: 8,
            skillName: "Fedora Linux",
            skillLogo: require('../assets/fedora-logo.jpeg'),
            shadeColor: 'shadow-md shadow-sky-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-sky-500"
        },
        {
            id: 9,
            skillName: "Devilbox",
            skillLogo: require('../assets/devilbox-logo.webp'),
            shadeColor: 'shadow-md shadow-red-600 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-red-600"
        },
        {
            id: 10,
            skillName: "PHP",
            skillLogo: require('../assets/php-logo.png'),
            shadeColor: 'shadow-md shadow-indigo-600 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-indigo-600"
        },
        {
            id: 11,
            skillName: "Drupal",
            skillLogo: require('../assets/drupal-logo.webp'),
            shadeColor: 'shadow-md shadow-sky-700 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-sky-700"
        },
        {
            id: 12,
            skillName: "Kotlin",
            skillLogo: require('../assets/kotlin-logo.webp'),
            shadeColor: 'shadow-md shadow-violet-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-violet-500"
        },
        {
            id: 13,
            skillName: "Jetpack Compose",
            skillLogo: require('../assets/jetpack-compose-logo.png'),
            shadeColor: 'shadow-md shadow-cyan-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-cyan-500"
        },
        {
            id: 14,
            skillName: "Android Studio",
            skillLogo: require('../assets/android-studio-logo.png'),
            shadeColor: 'shadow-md shadow-green-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-green-500"
        },
        {
            id: 15,
            skillName: "Git and GitHub",
            skillLogo: require('../assets/git-github-logo.png'),
            shadeColor: 'shadow-md shadow-red-700 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-red-700"
        },
        
        {
            id: 16,
            skillName: "Python",
            skillLogo: require('../assets/python-logo.png'),
            shadeColor: 'shadow-md shadow-cyan-700 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-cyan-700"
        },
        {
            id: 17,
            skillName: "C++",
            skillLogo: require('../assets/cpp-logo.png'),
            shadeColor: 'shadow-md shadow-sky-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-sky-500"
        },
        
        {
            id: 18,
            skillName: "MySQL",
            skillLogo: require('../assets/mysql-logo.png'),
            shadeColor: 'shadow-md shadow-yellow-500 rounded-xl mt-10',
            bgColor: 'bg-orange-500',
            textColor: "text-yellow-500"
        },
        
        
        
    ]
  return (
<div name="skills" className='bg-gradient-to-b  from-cyan-500 via-purple-700 to-pink-600 w-screen text-white lg:max-h-fit py-10'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full mb-15'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Skills</p>
                <p className='py-8 text-xl'>These are some skills I have acquired through my journey in Computer Science</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                
                {skills.map(({id,skillName,skillLogo,shadeColor},ind)=>
                (   
                    <div key={id} className={shadeColor}>
                    <img src={skillLogo} alt={skillName} className=' w-full max-h-full aspect-square duration-200 hover:scale-105'/>
                    <div className="flex items-center justify-center">
                        <span className={`w-1/2 px-6 py-3 m-4 text-center text-xl text-white`}>{skillName}</span>
                    </div>
                </div>  
                
                ))}
                
            </div>
        </div>
</div>
)
}

export default Experience