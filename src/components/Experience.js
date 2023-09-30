import React from 'react';

const Internship = () => {
    return (
    <div name="experience" className=' flex w-full h-fit bg-gradient-to-b from-gray-800 via-blue-950 to-black text-white mt-5 py-40 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-start justify-start h-full px-4 lg:flex-row'>
            <div className='flex flex-col items-start justify-start'>
                <h2 className='text-3xl sm:text-3xl font-semibold text-white mr-10'>
                Student Web Developer Intern (On-Campus)
                </h2>
                <p className='text-sky-300 text-justify py-6 max-w-md'>
                    I am currently working as a Student Web Developer Intern at Michigan State University's SEAL team, located at 1855 Place in East Lansing, MI. 
                    In this role, I am responsible for resolving technical issues in websites under the Residential and Hospitality (RHS) Department using the Drupal Content Management System (CMS). 
                    I utilize PHP, MySQL, and Devilbox to address over 20 technical issues, ensuring that the websites are functioning smoothly and efficiently. 
                </p>
                <br></br>
                <p className='text-sky-300'>
                    One of my key tasks is to prioritize and resolve tickets assigned by clients. 
                    I pull down the respective website repositories from Gitlab, make the necessary changes, and communicate with my supervisor for verification. 
                    This collaborative process ensures that the clients' requirements are met and that the websites are updated and optimized.
                </p>
                <br />
                <p className='text-sky-300'>
                Additionally, I am actively involved in an ongoing project to migrate all websites from Drupal 9 to Drupal 10. 
                As part of this project, I conduct local testing of the migration process, document any errors or bugs encountered, and research possible fixes to ensure a seamless transition. 
                This project has allowed me to enhance my problem-solving skills and gain valuable experience in website migration processes.                
                </p>  
                <br />
                <p className='text-sky-300'>
                Working as a Student Web Developer Intern at Michigan State University has been a rewarding experience. 
                It has provided me with the opportunity to apply my technical skills, collaborate with a supportive team, and contribute to the success of the SEAL team. 
                I am excited to continue learning and growing in this role as I contribute to the development and maintenance of websites for the RHS Department.         
                </p>  
                
            </div>
            
                <img src={require('../assets/msu-logo.png')}  alt="Michigan State University" className=' h-72 w-72 rounded-xl lg:ml-24 mt-14' />
            </div>
            

        
    </div>
    );
}


export default Internship;