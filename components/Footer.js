import React from 'react'
import {FaCheckCircle,FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-blue-900 mt-20 '>
        <div className='container  mx-auto px-4'>

                 {/* top */}
        <div className='flex justify-between'>
            <div className='p-5'>
                <p className='font-bold text-white'>Plpfactory</p>

            </div>
            <div className='flex space-x-5 p-5 text-orange-400 text-xl'>
                
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
               
                

            </div>

        </div>
        {/* top end here */}

{/* links container */}
    <div className='text-white flex justify-between mx-20 pb-10'>
            <div>
                <ul>
                    <li>
                        Login
                    </li>
                    <li>
                        Signup
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        Profile
                    </li>
                    <li>
                        Dashboard
                    </li>
                </ul>
            </div>


            <div>
                <ul>
                    <li>
                        Becom Seller
                    </li>
                    <li>
                        Blog
                    </li>

                    <li>
                        NewsLetter
                    </li>
                </ul>
            </div>


            <div>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Privacy
                    </li>
                </ul>
            </div>

    </div>

        </div>
       
    </div>
  )
}

export default Footer