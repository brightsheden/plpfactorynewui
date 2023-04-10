import Head from 'next/head'
import Image from 'next/image'

import castro from '../public/images/castro.png'
import lovehand from '../public/images/lovehand.png'
import faith from '../public/images/faith.png'
import laptop from '../public/images/laptop.png'
import templateimg from '../public/images/templateimg.png'
import user from '../public/images/user.png'



export default function Home() {
  return (
    <>
      <Head>
        <title>Plpfactory</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
      {/* header*/}
      <section className='flex justify-center '>
        <h3 className='md:text-2xl md:text-black md:font-bold'>All in One Market place for your Templates</h3>
      </section>

      {/* Hamburger*/}
      <section >
        <div className='flex justify-center mt-8'>
        <Image
            src={castro}
            alt='castro'
            width={'85%'}
            height={'100%'}
    
          
          />

        </div>
      </section>

      <section className=' mt-10'>

        <div className='flex justify-between'>
        <div>
        <div class="grid grid-cols-3 gap-4">
            <div class="">  <Image
            src={lovehand}
            alt='lovehand'
            width={'85%'}
            height={'100%'}
    
          
          /></div>
            <div class=" ...">  <Image
            src={lovehand}
            alt='lovehand'
            width={'85%'}
            height={'100%'}
    
          
          /></div>
            <div class=" ...">  <Image
            src={lovehand}
            alt='lovehand'
            width={'85%'}
            height={'100%'}
    
          
          />
          
          </div>

            <div class="...">  <Image
            src={lovehand}
            alt='lovehand'
            width={'85%'}
            height={'100%'}
    
          
          /></div>

      <div class="...">  <Image
            src={lovehand}
            alt='lovehand'
            width={'85%'}
            height={'100%'}
    
          
          /></div>
      </div>




        </div>
        <div className='w-1/2 '>
          <p className='text-2xl font-bold mt-5'>Get access to custum stock places,3d models, and much more from our creative sellers</p>
        </div>


        </div>
       

      
        <div className=' flex  justify-center mt-5'>
        <button className='bg-orange-500 text-white p-3 rounded-md w-1/3 text-md'>Sign up today</button>

        </div>
      </section>

      

      <section className='flex justify-between space-x-20 mt-8'>
      <div className='shadow-lg border border-2 border-blue-800'>

<Image
    src={faith}
    alt='faith'
    width={'85%'}
    height={'100%'}
    className='border border-white border-4'
    
    

  
  />
</div>

        
    <div className='space-y-20 justify-center flex flex-col justify-center'> 
                
    <p className='text-2xl font-bold w-2/3  '> Need a side hustle? with our easy-to-use-system , you can put your creations up for sale.
                  or get paid for uploading free items.
                </p>
                <button className='bg-orange-500 text-white p-3 rounded-md w-1/2 text-md border border-2 border-blue-800'>Sign up today</button>

            </div>
            
      </section>

      {/* template list*/}
      <section className='mt-10'>
        <h5 className='text-2xl font-bold mb-2'>Latest Template</h5>
        <div className='flex flex-wrap space-y-5 justify-between'>
          {/*template card container*/}
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
      </section>
     

     </main>
    </>
  )
}
