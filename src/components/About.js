import React from 'react';
const About = () => {
    return (
    <div name="about" className=' w-full min-h-fit  bg-gradient-to-b  from-cyan-500 via-purple-500 to-pink-500 text-white text-justify '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-semibold inline border-b-4 border-blue-700'> About </p>
            </div>
            <p className='text-xl mt-10'>
            I am Aditya Archunan Anand, a highly motivated and skilled individual currently pursuing a Bachelor of Computer Science at Michigan State University. 
            With a strong GPA of 3.94, I am actively seeking a technical internship position to further enhance my industry-oriented technology skills.

            <br /><br />
            <p className='text-xl'>
            Currently, I am continuing my journey as a Student Web Developer Intern at my university. 
            In this role, I am actively involved in resolving technical issues in websites using PHP, MySQL, and Drupal CMS. 
            I am also contributing to the ongoing project of migrating websites from Drupal 9 to Drupal 10, conducting local testing, documenting errors, and researching solutions.
            </p>
            <br />
            <p className='text-xl'>
            In addition to my on-campus job, I am an aspiring MERN stack developer. I got exposure to this industry-standard tech stack
            in my sophomore year. With good background in React and NextJS through personal projects like making clones of the Amazon and LinkedIn websites,
            I was able to confidently use this tech stack in my hackathon project which involved the use of MERN stack to authenticate users using JWT tokens,
            and pull software crash logs from Mongo DB and display them according to the priority level which was determined by an AI model written by my friends 
            for this purpose. I am currently using this tech stack while working on a start-up idea called <a href='https://www.targetistusa.com' className=' underline'>Targetist</a> with my friend.     
            </p>
            <br />
            
            <p className='text-xl mb-5'>
            Outside of my technical pursuits, I enjoy playing cricket and tennis.
            </p>
            </p>
        </div>

    </div>
    );
}

export default About;