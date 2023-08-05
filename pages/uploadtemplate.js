import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaDollarSign } from 'react-icons/fa'
import leaf from '../public/images/faith.png'

function UploadTemplate() {
  return (
    <form>
    {/*header*/}
    <div className='flex justify-between'>
        <FaArrowLeft/>
        <button className='bg-orange-400 text-base p-2   border border-blue-800 text-blue font-medium rounded-lg'>Upload</button>

    </div>
    
    {/*image and text*/}
    <div className='flex justify-between mt-5'> 
        <div className=' w-1/2 h-1/2 overflow-hidden'> 
        <Image
                src={leaf}
                className='w-full h-fit'
                />
            <input type='text-area' placeholder='add description'/>


        </div>

        <div className='border border-black w-1/2 ' >
            <div className='flex flex-col mt-5 p-2 space-y-5'>
                <input type='text' className='text-base border border-black p-5 w-1/2' placeholder='add name'/>
                <input type='file' placeholder='add name'/>
                <label className='text-base font-medium'>select design type</label>
                <select className='w-1/2'>
                    <option>value1</option>
                    <option>value2</option>
                </select>
            </div>

            <div className='text-center'>
            <p className='font-medium text-base text-blue-800'>Price</p>
                <div className='flex justify-center space-x-5'>
                <button className='bg-gray-200 border border-blue-800 rounded text-xl p-2'>Free</button>
                <input type='text' className='border border-blue-800 bg-gray-100' placeholder='price' />
                    
          

                </div>
                
               
            </div>

        </div>

    </div>

    </form>
  )
}

export default UploadTemplate