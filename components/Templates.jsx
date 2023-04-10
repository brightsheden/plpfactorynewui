import React from 'react';
import Image from 'next/image'
import templateimg from '../public/images/templateimg.png'
import user from '../public/images/user.png'


function Templates() {
  return (
    <div className='grid   grid-cols-4 gap-5'>
    {/*template card container*/}
    <div className='space-y-2'>
      {/*image*/}

      <Image
      src={templateimg}
      alt='laptop'
      
      height={'100%'}
      className='w-full'
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
  )
}

export default Templates