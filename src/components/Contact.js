import React from "react";

const Contact = () => {
    return(
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-800 via-blue-950 to-black p-4 text-white">
            <div className="flex flex-col p-4 justify-start max-w-screen-xl mx-auto h-full">
                <div className="pb-8">
                    <p className="text-3xl font-bold inline border-b-4 border-blue-500">Contact</p>
                    <p className="py-6">Submit the form below to get in touch</p>
                </div>
                <div className="flex items-center justify-center">
                    <form action="https://getform.io/f/98484116-5253-4539-9b0a-86f1a91536d3" method="POST" className="flex flex-col gap-10 w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Enter your email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea name="message" placeholder="Your message..." rows={"10"} className="p-2 transparent border-2 rounded-md bg-transparent text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center">Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;