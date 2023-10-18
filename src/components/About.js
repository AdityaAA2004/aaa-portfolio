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
            In addition to my on-campus job, I have undertaken impressive projects outside of my academic responsibilities. 
            For instance, I built a clone of the Amazon website using Next.js, incorporating features like server-side rendering and Google Authentication. 
            I also developed a LinkedIn clone using React.js, allowing users to post and expand on content. These projects have further honed my technical skills and provided me with valuable hands-on experience. 
            My leadership skills shine through the role as a Tech Lead at Target.ist, where I collaborated on building an AI-based task automation software.
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