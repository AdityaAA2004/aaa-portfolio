import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const SocialLinks = () => {

    const links= [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={20} />
                </>
            ),

            href: 'https://www.linkedin.com/in/aanandadi/',
            style: 'rounded-tr-md',
            download: false
        },
        {
            id:2,
            child: (
                <>
                Github <FaGithub size={20} />
                </>
            ),

            href: 'https://github.com/AdityaAA2004',
            style: 'rounded-tr-md',
            download: false
        },
        {
            id:3,
            child: (
                <>
                Mail <FaEnvelope size={20} />
                </>
            ),

            href: 'mailto:anandad1@msu.edu',
            style: 'rounded-tr-md',
            download: false
        },
        {
            id:4,
            child: (
                <>
                Resume <FaUser size={20} />

                </>
            ),

            href: require('../assets/Aditya_Archunan_Anand.pdf'),
            style: 'rounded-tr-md',
            download: true
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {links.map((link,index) => (
                    <li key={link.id} className="flex justify-between items-center w-40 h-14  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-cyan-700 rounded-tr-md">
                        <a href={link.href} rel="noreferrer" target="_blank" className="flex justify-between items-center w-full px-4 text-white">
                            {link.child}
                        </a> 
                    </li>
                ))}
            

            </ul>
        </div>
    )
}

export default SocialLinks;

