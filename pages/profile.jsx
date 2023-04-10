import React, { useState } from 'react'
import Image from 'next/image'
import profilepic from '../public/images/profilepic.png'
import {FaFacebookMessenger,FaUserCircle} from 'react-icons/fa'
import leaf from '../public/images/leaf.png'
import templateimg from '../public/images/templateimg.png'
import user from '../public/images/user.png'


function profile() {
    const [showHistory,setShowHistory] = useState(true)
    const [showFollowing,setShowFollowing] = useState(false)

    const showHitoryBtn = ()=>{
        setShowHistory(true)
        setShowFollowing(false)
    }

    const showFollowingBtn = ()=>{
        setShowFollowing(true)
        setShowHistory(false)
        
    }
  return (
    <>
    {/* user details container*/}
    <div className='flex  justify-center mt-5'>
        <div className='flex justify-between space-x-10 '>
            <div className='flex items-center space-x-5'>
                <Image
                src={profilepic}
                className='rounded-full w-20'
                />
                <div>
                    <p>john doe</p>
                    <p>200 items</p>
                </div>
            </div>

            <div className='text-2xl mt-5'>
                <FaFacebookMessenger/>
            </div>



        </div>

    </div>

    {/* items list*/}


    {/* items list container*/}

    <div>
        <div className='flex space-x-5'>
            {/* items list header*/}
            <button onClick={showHitoryBtn}>Download History</button>
            <button onClick={showFollowingBtn}>Following <span>200</span></button>

        </div>

        <div>

            {showHistory && (
                <>
                {/* table*/}
            <table className="table-auto w-full ">
                <thead >
                    <tr className='mb-20'>
                    <th  >items</th >
                    <th  >date</th >
                    <th  >price</th >
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border border-slate-300 " > 
                    <div className='flex items-center justify-center space-x-5'>
                        <Image 

                        src={leaf}
                        className='w-50'
                        
                        />

                        <p className='font-bold'>Name</p>
                    </div>

                    </td>
                    <td class="border border-slate-300 font-bold text-center">March 3,2023</td>
                    <td class="border border-slate-300  font-bold text-center">Free</td>
                    
                    </tr>
                    <tr>
                    <td class="border border-slate-300 " > 
                    <div className='flex items-center justify-center space-x-5'>
                        <Image 

                        src={leaf}
                        className='w-50'
                        
                        />

                        <p className='font-bold'>Name</p>
                    </div>

                    </td>
                    <td class="border border-slate-300 font-bold text-center">March 3,2023</td>
                    <td class="border border-slate-300  font-bold text-center">Free</td>
                    
                    </tr>
                    <tr>
                    <td class="border border-slate-300 " > 
                    <div className='flex items-center justify-center space-x-5'>
                        <Image 

                        src={leaf}
                        className='w-50'
                        
                        />

                        <p className='font-bold'>Name</p>
                    </div>

                    </td>
                    <td class="border border-slate-300 font-bold text-center">March 3,2023</td>
                    <td class="border border-slate-300  font-bold text-center">Free</td>
                    
                    </tr>
                </tbody>
            </table>
                </>
                
                
            )}
               
                {showFollowing && (

<div className='flex flex-wrap flex-col md:flex-row space-y-5 justify-between'>
{/* following container*/}
<div className='space-y-2 '>
   <FaUserCircle className='text-3xl'/>
   <p className='font-bold'>John Doe</p>
   <p>200 items</p>
   <FaFacebookMessenger/>
   

</div>
<div className='space-y-2  '>
   <FaUserCircle className='text-3xl'/>
   <p className='font-bold'>John Doe</p>
   <p>200 items</p>
   <FaFacebookMessenger/>
   

</div>

<div className='space-y-2 '>
   <FaUserCircle className='text-3xl'/>
   <p className='font-bold'>John Doe</p>
   <p>200 items</p>
   <FaFacebookMessenger/>
   

</div>

<div className='space-y-2 '>
   <FaUserCircle className='text-3xl'/>
   <p className='font-bold'>John Doe</p>
   <p>200 items</p>
   <FaFacebookMessenger/>
   

</div>

<div className='space-y-2 '>
   <FaUserCircle className='text-3xl'/>
   <p className='font-bold'>John Doe</p>
   <p>200 items</p>
   <FaFacebookMessenger/>
   

</div>

<div className='space-y-2 '>
   <FaUserCircle className='text-3xl'/>
   <p className='font-bold'>John Doe</p>
   <p>200 items</p>
   <FaFacebookMessenger/>
   

</div>





</div>
                )}
        
            
        </div>

        

    </div>

    {/*suggested*/}

    <div className='space-y-5 m-5' >
        <h3 className='font-bold'>Sugested</h3>
        <div className='flex flex-wrap space-y-5 justify-between'>
        <div className='space-y-2'>
            {/*image*/}
            <Image
            src={templateimg}
            alt='laptop'
            
            height={'100%'}
            className='w-100'
            />
            <div className='flex justify-between p-1'>
              <p className='font-bold'>Name</p>
              <p className='font-bold'>$100</p>

            </div>

            <div>
              <p className='font-bold text-sm'>Category:flyer</p>
              <p className='font-bold text-sm' >reviews 29</p>
            </div>

            <div className='flex space-x-3'>
              <Image
              src={user}
              />
              <p className='font-bold'>Jon doe</p>
            </div>

          </div>


          <div className='space-y-2'>
            {/*image*/}
            <Image
            src={templateimg}
            alt='laptop'
            
            height={'100%'}
            className='w-100'
            />
            <div className='flex justify-between p-1'>
              <p className='font-bold'>Name</p>
              <p className='font-bold'>$100</p>

            </div>

            <div>
              <p className='font-bold text-sm'>Category:flyer</p>
              <p className='font-bold text-sm' >reviews 29</p>
            </div>

            <div className='flex space-x-3'>
              <Image
              src={user}
              />
              <p className='font-bold'>Jon doe</p>
            </div>

          </div>


          <div className='space-y-2'>
            {/*image*/}
            <Image
            src={templateimg}
            alt='laptop'
            
            height={'100%'}
            className='w-100'
            />
            <div className='flex justify-between p-1'>
              <p className='font-bold'>Name</p>
              <p className='font-bold'>$100</p>

            </div>

            <div>
              <p className='font-bold text-sm'>Category:flyer</p>
              <p className='font-bold text-sm' >reviews 29</p>
            </div>

            <div className='flex space-x-3'>
              <Image
              src={user}
              />
              <p className='font-bold'>Jon doe</p>
            </div>

          </div>
        </div>
    </div>
    
    
    </>
  )
}

export default profile