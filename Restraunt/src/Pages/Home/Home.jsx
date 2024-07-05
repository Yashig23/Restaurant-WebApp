import React from 'react'
import Layout from '../../Components/Layout/Layout'
import bgRemovedImg from '../../assets/SVGS/bgRemovedImg.png'
import VideoIntro from '../../assets/SVGS/VideoIntro.mp4'
import { CarouselImages } from '../../constants'
import {gifs} from '../../assets/gif'
import ReviewCarousal from '../../Components/Carousal/ReviewCarousal'
import onlineOrder from '../../assets/Gifs/online-shop.gif'
import chef from '../../assets/Gifs/chef.png'
import foodDelivery from '../../assets/Gifs/food-delivery.png'

const Home = () => {
  return (
    <>
      <Layout>
        {/* Video Part */}
        <div className='z-1 '>
          <video src={VideoIntro} autoPlay loop muted className='w-[100%] ' />
          <div className=' text-white font-bold text-[50px] w-[100%] h-[100%] top-0 flex absolute flex-col justify-center items-center '>
            <h1>Welcome...</h1>
            <p>To R Fast Food </p>
          </div>
        </div>
        {/* About Us Part */}
        <div className='flex  p-8 bg-yellow-900  '  >
          <div style={{ backgroundImage: "url('https://i.pinimg.com/236x/ec/60/f2/ec60f241b51353146cc3b11a9287928b.jpg')", backgroundSize: 'cover' }} className='flex rounded-xl'>
            <div className='w-[50%]  hidden lg:block'>
              <img src={chef} className='m-3 p-3' />
            </div>
            <div className='w-auto m-2 '>
              <div className='text-white text-[50px] font-thin flex justify-center items-center mt-6 flex-wrap'>
                <h1>About Us</h1>
              </div>
              <div className='text-white text-xl font-light mt-10 mr-2 ml-2 flex justify-center pl-10 pr-10 pt-2 pb-2'>
                <p>Welcome to R Fast Food, your go-to destination for mouth-watering street-style fast food! Nestled in the heart of Sanskardhani Jabalpur, we have been serving delectable delights for over a decade, bringing the authentic flavors of the streets to your table.</p>
              </div>
              <div className='flex justify-center items-center m-7 flex-wrap'>
                <button onClick={() => window.location.href = '/about'} className='border rounded-xl text-white flex justify-center px-10 py-2 hover:bg-white hover:text-yellow-950 hover:scale-105 duration-300'>Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Part */}
        <div className='bg-yellow-500 p-0'>
          <div className=' w-full bg-black p-4'>
            <div className='flex justify-center text-center font-thin text-[50px] text-white  '>
              Menu
            </div>
          </div>

          <section className='flex justify-center text-center m-1 '>
            <div className='bg-black w-full flex flex-wrap gap-10 justify-center p-10'>
              {CarouselImages.map((e)=>(
                <div id={e.id} className=' m-3 p-4'>

               <div className='flex justify-center items-center'>
              <img src={e.png} className='h-[130px] w-[150px]'></img>
              </div>
              <div className='text-white text-[20px] font-medium m-2'> {e.title}</div>
              
            </div>
           ))}
            </div>
          </section>
        </div>

        {/* Services We Provide */}
        <section>
          <div className='bg-teal-600 p-5 text-white text-[50px] font-thin'>
           <div className='flex justify-center text-center'> Services </div>
          </div>
          <div className='bg-white w-full flex flex-wrap gap-10 justify-center p-5'>
           {gifs.map((e)=>(
             <div id={e.id} className=' m-3 p-4'>

             <div className='flex justify-center items-center'>
            <img src={e.img} className='h-40 w-25'></img>
            </div>
            <div className='text-black text-[20px] font-medium m-2 flex justify-center items-center'> {e.title}</div>
            
          </div>
           ))}
          </div>
        </section>

        {/* Reviews section */}
        <section>
          <div className='bg-black flex justify-center items-center text-[50px] text-white p-5 flex-wrap font-thin'>
            Here what People are Saying!
          </div>
          <div className='bg-white'>
          <ReviewCarousal></ReviewCarousal>
          </div>
        </section>

          {/* Order Section */}
          <section>
          <div className='bg-black flex justify-center items-center text-[50px] text-white p-5 font-thin'>
          Order Online
          </div>
          <div className='bg-white '>
          <div className='text-[40px] text-yellow-400 font-semibold flex justify-center p-5 m-0'>
            Place your
            <span className='text-[40px] text-yellow-500'>&nbsp;Order Now !!!</span>
            </div>
            <div className='flex pt-0 pb-0 pl-5 pr-5'>
           
          <div className='m-3 p-1'>
          <img src={foodDelivery} className='w-[300px] h-[300px]'></img>
          </div>
          <div className='mt-5 text-black text-xl font-light'>
            <div> Enjoy our delicious meals at home with our easy online ordering. Choose your favorites, customize your dishes, and get them delivered or opt for curbside pickup. Quick, convenient, and tasty! </div> <br></br>
            Experience the convenience of our online ordering system. Whether you're craving a quick bite or planning a family feast, our diverse menu offers something for everyone
            </div>
          </div>
          <div className=' flex justify-center items-center '>
            <button onClick={()=> window.location.href = '/menu'} className='border rounded-2xl text-black font-thin p-4 hover:bg-black hover:text-white hover:font-semibold  hover:duration-300 hover:scale-110 m-4'>Order now</button>
           </div>
           
          
         
          </div>
         
        </section>

       {/* Add Review */}
       <section className='bg-black p-12'>
        <div className='text-white p-0 flex justify-center text-center text-[25px] font-thin m-2'>
          Having a Review For Us?
        </div>
        <div className='flex justify-center text-center m-4'>
        <button onClick ={()=> window.location.href = '/review'} className='border rounded-2xl text-white font-thin p-4 hover:bg-white hover:text-black hover:font-semibold  hover:duration-300 hover:scale-110 '> Add Review</button>
        </div>
       </section>

       {/* Contact Us */}
       <section style={{backgroundImage: "url('https://i.pinimg.com/236x/6f/0d/de/6f0dde1a22fdc746b9abe8224735afae.jpg')", backgroundSize: 'cover'}} className='p-12'>
        <div className='text-white p-0 flex justify-center text-center text-[25px] font-thin m-2'>
          Wanna Contact Us?
        </div>
        <div className='flex justify-center text-center m-4'>
        <button onClick={()=>window.location.href ='/contact'} className='border rounded-2xl text-white font-thin p-4 hover:bg-white hover:text-black hover:font-semibold  hover:duration-300 hover:scale-110 '>Contact Us</button>
        </div>
       </section>

      </Layout>
    </>
  )
}
{()=> window.location.href = '/signup'}
export default Home