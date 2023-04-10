import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Navbar/>
     <div className="container  mx-auto px-4">
    
       <Component {...pageProps}  />
       
    </div>
    <Footer/>
    </>
   
   )
}
