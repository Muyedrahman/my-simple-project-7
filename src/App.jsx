
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';





function App() {
  

  return (
    <>
    <Navbar />
{/* 2 */}

<div className='bg-[#f5f5f5] grid grid-cols-2 gap-[24px] my-[40px]'>


  <div className =' rounded-md text-white p-6 h-[250px] bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] flex items-center justify-center flex-col'>
     <h3>In-Progress</h3>
     <h1 className='font-bold text-4xl'>0</h1>
  </div>
  <div className='rounded-md text-white p-6 h-[250px] bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)] flex items-center justify-center flex-col'>
    <h3>Resolved</h3>
    <h1 className='font-bold text-4xl'>0</h1>
  
  </div>



</div>

     
      
{/* 3 */}
   <Footer />
      


    </>
  )
}

export default App
