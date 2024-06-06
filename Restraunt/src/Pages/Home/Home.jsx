import React from 'react'
import Layout from '../../Components/Layout/Layout'
import bgRemovedImg from '../../assets/SVGS/bgRemovedImg.png'
import VideoIntro from '../../assets/SVGS/VideoIntro.mp4'
import { CarouselImages } from '../../constants'

const Home = () => {
  return (
    <>
      <Layout>
        {/* Video Part */}
        <div className='z-1 '>
          <video src={VideoIntro} autoPlay loop muted className='w-[100%] ' />
          <div className=' text-white font-bold text-[50px] w-[100%] h-[100%] top-0 flex absolute flex-col justify-center items-center'>
            <h1>Welcome...</h1>
            <p>To R Fast Food </p>
          </div>
        </div>
        {/* About Us Part */}
        <div className='flex p-8 bg-yellow-900  '  >
          <div style={{ backgroundImage: "url('https://i.pinimg.com/236x/ec/60/f2/ec60f241b51353146cc3b11a9287928b.jpg')", backgroundSize: 'cover' }} className='flex rounded-xl'>
            <div className='w-[50%]'>
              <img src={bgRemovedImg} className='pl-20 ' />
            </div>
            <div className='w-[50%] m-2'>
              <div className='text-white text-[50px] font-semibold flex justify-center items-center mt-6'>
                <h1>About Us</h1>
              </div>
              <div className='text-white text-xl font-medium mt-10 mr-2 ml-2'>
                <p>Welcome to R Fast Food, your go-to destination for mouth-watering street-style fast food! Nestled in the heart of Sanskardhani Jabalpur, we have been serving delectable delights for over a decade, bringing the authentic flavors of the streets to your table.</p>
              </div>
              <div className='flex justify-center items-center m-7 '>
                <button onClick={() => window.location.href = '/about'} className='border rounded-xl text-white flex justify-center px-10 py-2 hover:bg-white hover:text-yellow-950 hover:scale-105 duration-300'>Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Part */}
        <div className='bg-yellow-500 flex p-5'>
          <div className='w-[50%] bg-slate-900 font-semibold p-2'>
            <div className='text-[50px] font-semibold text-white flex justify-center'>
           <h1> Menu </h1>
           </div>
           
           {CarouselImages.map((e)=>(
            <div className='text-white text-[20px] flex justify-center m-2'>
            <h2>{e.title}</h2>
            </div>
           ))}
           
          </div>
          <div className='w-[50%] bg-red-400 flex justify-center' style={{backgroundImage: "url('https://i.pinimg.com/236x/7d/18/44/7d1844f3bd69a76fd1d10380f489847b.jpg')", backgroundSize: 'cover', width: 500, height: 500}}>
           <h1> Menu description</h1>
           </div>
        </div>

      </Layout>
    </>
  )
}

export default Home