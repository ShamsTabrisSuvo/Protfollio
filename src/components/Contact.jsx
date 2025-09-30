import React from 'react'
import Navbar from './Navbar'
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>Contact Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
                <div className='mt-10'>
                    <iframe src= "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3651.0820018234344!2d90.42527539999999!3d23.7800941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x3755c7306a6af363%3A0x4959dd25fef3d702!2sBadda%20Link%20Road%2C%20Dhaka%20-1212%2C%20Madhya%20Badda%20Baitul%20Aman%20Jame%20Masjid%20Shopping%20Complex%2C%20Configer%20Bapari%20Tower%2C%20Bepari%201212!3m2!1d23.7802036!2d90.4252813!5e0!3m2!1sen!2sbd!4v1759207851130!5m2!1sen!2sbd" width="600" height="450" loading="lazy" className='w-full rounded-2xl'></iframe>
                </div>
                <div className='mt-10'>
                    <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>
                    <div className='grid grid-cols-2 gap-3 md:gap-7 my-7'>
                        <input type="text" placeholder='Full Name' className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'/>
                        <input type="email" placeholder='Email Address' className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'/>
                    </div>
                    <textarea rows={4} cols={50} placeholder='Your Message' className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full'></textarea>
                    <div className='flex justify-end mt-7'>
                        <button className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer'><FaPaperPlane/> Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
