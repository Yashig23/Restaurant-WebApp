import React from 'react'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import customerexperience from '../../assets/Gifs/customer-experience (1).png'

const Review = () => {

  const [rate, setRate] = useState(0);

  const numbers = [];
  for(let i=0; i<5; i++){
     numbers.push(i+1);
  }

  const updateRating=(data)=>{
    setRate(data);
  }

  return (
    <>
    <Navbar></Navbar>
      <section>
        <div className="bg-black text-white py-5">
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              <p className="ml-6 text-yellow-300 text-lg uppercase ">REVIEW</p>
              <p className="text-3xl md:text-5xl my-4 leading-relaxed ">Leave us a feedback!</p>
              <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Please provide your valuable feedback as your feedback Matters...
              </p>
              <div>
                <img src={customerexperience}></img>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">Having a feedback?</h4>
                        <form id="feedbackForm">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message</label>
                            <textarea 
                              maxlength="300" 
                              name="feedback" 
                              id="feedback" 
                              rows="4" 
                              cols="80" 
                              className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full" 
                              placeholder="" 
                              required
                            ></textarea>
                          </div>
                          <div className='relative w-full mb-3'>
                            <lable className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="file">Upload Images</lable>
                            <div className='bg-gray-300 p-3 flex justify-center items-center w-1/5 cursor-pointer'>
    <span className="text-3xl">+</span>
    <input 
      type="file" 
      id="imageInput" 
      name="image" 
      accept="image/*" 
      className='opacity-0 absolute h-full w-full top-0 left-0 cursor-pointer' 
    
    />
  </div>
                          </div>
                          <div className='relative w-full mb-3'>
                            <lable className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="rating">Rate Us</lable>
                            <div className='flex '>
                            {numbers.map((e, i)=>(
                              <div onClick={()=>updateRating(i)} key={i} className={`p-3 rounded-md text-white m-1 flex justify-evenly cursor-pointer ${
                                i <= rate ? 'bg-yellow-500' : 'bg-black'
                              }`}>
                                <div>{i+1}</div></div>
                            ))}
                            </div>
                            
                          </div>
                          <div className="text-center mt-6">
                            <button 
                              id="feedbackBtn" 
                              className="border rounded-2xl bg-yellow-400 text-black font-thin p-4 hover:bg-black hover:text-white hover:font-semibold  hover:duration-300 hover:scale-110 m-4" 
                              type="submit" 
                              style={{transition: 'all 0.15s ease 0s'}}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Review;
