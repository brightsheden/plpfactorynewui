import React, { useState } from 'react'
import { FaArrowLeft,FaFlag,FaFileDownload,FaStar,FaUser, FaCheckCircle} from 'react-icons/fa'
import user from '../public/images/user.png'
import templateimg from '../public/images/templateimg.png'
import leaf from '../public/images/leaf.png'
import Image from 'next/image'

function Template() {
    const [showSuccesfulCard, setSuccesfulCard] = useState(false)
    const [follow, setFollow] = useState(false)
    
    const showSuccesfulCardBtn = ()=>{
        setSuccesfulCard(true)
    }

    const closeSuccesfulCardBtn = ()=>{
        setSuccesfulCard(false)
    }
  return (
    <>

    {showSuccesfulCard && (
               <div className='flex justify-center z-40 relative'>

               <div onClick={closeSuccesfulCardBtn} className='bg-white shadow-lg w-49 h-80 rounded-lg items-center space-y-3 flex flex-col p-5 justify-center absolute bottom-0 top-0 right-50'>
                   <button>x</button>
                   <h1 className='text-blue-800 text-5xl font-bold'>Payment Successful</h1>
                   <FaCheckCircle className='text-green-800 text-8xl'/>
       
               </div>
       
           </div>
    )}
 
    

    
    <div className='mb-10 mt-4'>
        {/* arrow left */}
        <FaArrowLeft  />

    </div>

    <div className='flex '>
         {/* image and discption container*/}
         <div className='mt-4'>
             {/* image and discption */}
             <div className='flex justify-between mb-3'>
                {/* head */}
                <div className='flex item-center space-x-3'>
                    {/* user profile*/}
                <Image
              src={user}
              />
              <p>John doe</p>

                </div>

                <div>
                     {/* follow btn*/}
                    <button className='border bg-gray-200 border-blue-800 p-1 text-blue-800'>Follow</button>
                </div>

                <div>
                    <FaFlag/>
                </div>
             </div>

             <div className=' '>
                 {/* template image*/}
                 <div>
                 <Image
              src={templateimg}
              
              className='w-full'
              />

                 </div>
                 <p className='mt-3'>
                 Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem
                  ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                 </p>
                

             </div>

         </div>

         <div className=' mt-11 p-2 w-full'>
            <div className='space-y-10'>
            <h2 className='font-bold'>Business card</h2>
            <p className='font-bold'>Card: 1200*1299</p>
            <p className='font-bold'>File Type: jpg</p>

            <div className='text-center mt-5'>
                <p className='text-black  text-2xl'>Price:<span className='font-bold'>$10</span></p>
                <button className='border border-blue-800 p-3 font-bold text-blue-800 w-1/2 rounded-lg ' onClick={showSuccesfulCardBtn}>Pay</button>
            </div>

            
            <div>
            <FaFileDownload className='text-blue-800 text-2xl'/>
            <p className='font-bold'>200</p>
            </div>
            

            


            </div>
          
         </div>

    </div>


    {/* reviews*/}
    <div className='mt-10'>

        {/* reviews head*/}

        <div className='flex space-x-10 my-5'>
          
            <p className='text-xl'>Reviews 20</p>
            <div className='flex text-orange-500'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            </div>
           

        </div>
          {/* reviews head end*/}

          <div>
                <div className='flex items-center space-x-3'>
                    <FaUser/>
                    <div>
                        <p>Username</p>
                        <div className='flex text-orange-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                        </div>
                    </div>
                </div>

                <p className='text-md w-2/3 my-3'> 
                Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                </p>
          </div>

          <div>
                <div className='flex items-center space-x-3'>
                    <FaUser/>
                    <div>
                        <p>Username</p>
                        <div className='flex text-orange-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                        </div>
                    </div>
                </div>

                <p className='text-md w-2/3 my-3'> 
                Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                </p>
          </div>


          <div>
                <div className='flex items-center space-x-3'>
                    <FaUser/>
                    <div>
                        <p>Username</p>
                        <div className='flex text-orange-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                        </div>
                    </div>
                </div>

                <p className='text-md w-2/3 my-3'> 
                Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                </p>
          </div>

          <div>
                <div className='flex items-center space-x-3'>
                    <FaUser/>
                    <div>
                        <p>Username</p>
                        <div className='flex text-orange-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                        </div>
                    </div>
                </div>

                <p className='text-md w-2/3 my-3'> 
                Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                </p>
          </div>

    </div>

    <div>
        <h3>More from john doe</h3>
        <div className='flex flex-wrap gap-4'>
            <div>
                <Image

                src={leaf}
                className='w-full'
                
                />
                
            </div>
            <div>
                <Image

                src={leaf}
                
                />
                
            </div>

            <div>
                <Image

                src={leaf}
                
                />
                
            </div>

            <div>
                <Image

                src={leaf}
                
                />
                
            </div>
        </div>

        <div><p>Visit the creators</p></div>
    </div>
    </>
  )
}

export default Template