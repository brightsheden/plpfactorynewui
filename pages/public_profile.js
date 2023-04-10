import React,{useState} from 'react'
import {FaInstagram,FaFacebook,FaTwitter,FaFacebookMessenger,FaArrowLeft} from 'react-icons/fa'
import Image from 'next/image'
import profilepic from '../public/images/profilepic.png'
import templateimg from '../public/images/templateimg.png'

import Templates from '@/components/templates'

function public_profile() {
    const [showTemplates, setShowTemplates] = useState(true)
    const [showCollections, setShowCollections] = useState(false)
    const [showCollection, setShowCollection] = useState(false)

    const showTemplatesBtn = ()=>{
        setShowTemplates(true)
        setShowCollections(false)
    }

    const showCollectionsBtn = ()=>{
        setShowCollections(true)
        setShowTemplates(false)
    }

    const showCollectionBtn = ()=>{
      setShowCollection(true)
      setShowCollections(false)
      setShowTemplates(false)
  }
  return (
    <>
    {/* user details container*/}
    <div className='flex  justify-between items-center mt-5'>

        <div>
            <FaArrowLeft/>
        </div>

        <div>
        <div className='flex justify-between space-x-10 '>
            <div className='flex items-center space-x-5'>
                <Image
                src={profilepic}
                className='rounded-full w-20'
                />
                <div className='font-bold'>
                    <p>john doe</p>
                    <p>200 items</p>
                </div>
            </div>

            <div className='text-2xl mt-5'>
                <FaFacebookMessenger/>
            </div>



        </div>



        <div>
        <div className='flex space-x-5 p-5  text-2xl'>
                
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
               
                

            </div>

        </div>


        </div>

        <div>
            <button className='bg-gray-200 text-blue-800 border border-blue-800 rounded-md p-1'>Follow</button>
        </div>
        

    </div>


        {/* items list*/}


    {/* items list container*/}

    <div>
        <div className='flex space-x-5'>
             {/* items list header*/}
             <button className='text-2xl font-bold' onClick={showTemplatesBtn}>All <span>4</span></button>
            <button className='text-2xl font-bold' onClick={showCollectionBtn}>Collections  <span>20</span></button>
        </div>

        <div className='space-x-6 my-5'>
            <button className='rounded-lg p-2 bg-white text-blue-800 border border-blue-800'>Poster</button> <button className='rounded-lg p-2 bg-white text-blue-800 border border-blue-800'>Poster</button>
            <button className='rounded-lg p-2 bg-white text-blue-800 border border-blue-800'>Poster</button>
        </div>

        {/*template list*/}
        <div>
            {showTemplates && (
                <Templates />

            )}

            {/*collection*/}

            {showCollections && (
                <div className='grid   grid-cols-4 gap-5 '>
                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold text-md'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>

                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  width={'100%'}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>

                <div className=' border-black '>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>

                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>

                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>


                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>


                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>


                <div className=' border-black'>
                  <Image
                  src={templateimg}
                  className='w-full rounded-lg'
                  
                  />
                  <div className='flex justify-between font-bold text-md'>
                    <p>Collection Name</p>
                    <p>30 files</p>
                    <p>$100</p>
                  </div>
                  <p className='font-bold mt-3 text-md'>Date created: march,23,2023</p>
                </div>
            </div>

            )}

              {/*collection component */}
              {showCollection && (
                <div>
                <h2 className='text-2xl'>Collection Name</h2>
              <Templates/>
              </div>
              )}
            
          
       
        </div>
    </div>


    </>
  )
}

export default public_profile