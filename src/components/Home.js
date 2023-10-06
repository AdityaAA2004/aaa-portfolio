import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Home = () => {
    return (
    <div name="home" className=' flex w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 text-white text-justify mt-5 py-40 '>
        <div className='max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row'>
            <div className='flex flex-col items-center justify-center gap-11'>
                <h2 className='text-3xl sm:text-3xl font-semibold text-white mr-10'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'I am an aspiring learner',
                        5000,
                        'I study at MSU',
                        5000,
                        'I am an on-campus Student Web-Developer',
                        5000,
                        'I am a Tech Lead at Targetist',
                        5000,
                    ]}
                    speed={10}
                    cursor={false}
                    style={{ fontSize: '1.5em' }}
                    repeat={Infinity}
                /> 
                </h2>
                <p className='text-white text-xl py-6 max-w-lg'>
                    I am an undergraduate student at MSU studying computer science.
                    I am currently in my sophomore and have gained experience in using React and Next.js
                    by building clones of famous websites and have used other technologies like Google Firebase, Stripe API, Redux.js.
                    I have learnt Python, Java and C++ in backend upto an intermediate level.
                    I would love to expand my knowledge as much as possible in other horizons of this exciting field
                    of Computer Science.  
                </p>
                <div>
                <Link to='portfolio' smooth={true} duration={500}>
                    <button className=' group text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer gap-3'>
                       Portfolio   <span className=' group-hover:rotate-90 duration-300'> <FaArrowRight size={20} /> </span>
                    
                    </button>
                    </Link>
                </div>
            </div>

                <img src={require('../assets/my-pic.png')}  alt="Aditya Archunan Anand" className=' h-72 w-72 rounded-2xl lg:ml-24 mt-14' />
            </div>
            

        
    </div>
    );
}


export default Home;