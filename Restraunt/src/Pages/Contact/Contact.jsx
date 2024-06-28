import React from 'react'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout.jsx'

const Contact = () => {

  const navigate = useNavigate();
  const[disabledBtn, setDisableBtn] = useState(false);
  const[error, setError] = useState(false);
  const [userdata, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    discription: ''
})

let countryList = Country.getAllCountries();

const [countryid, setCountryid] = useState('');
const [stateid, setStateid] = useState('');
const [cityid, setCityid] = useState('');

const [stateList, setStateList] = useState([]);
const [cityList, setCityList] = useState([]);

const handleCountryChange = (e) => {
   const countryValue = e.target.value;
   setCountryid(countryValue);
   setUserData(prevUserData => ({ ...prevUserData, country: countryValue }));
   const states = State.getStatesOfCountry(countryValue);
   setStateList(states);
   setCityList([]); 
};

const handleChange=(e)=>{
   const {name, value} = e.target;
   if (name === 'city') {
    setCityid(value); 
  }

  setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
   
}

const handleStateChange = (e) => {
  if (countryid) {
    const stateValue = e.target.value;
    setStateid(stateValue);
    setUserData(prevUserData => ({ ...prevUserData, state: stateValue }));
    const cities = City.getCitiesOfState(countryid, stateValue);
    setCityList(cities);
  }
};

const submitData=async(e)=>{
  e.preventDefault();
  const {firstName,
    lastName,
    email,
    phone,
    country,
    state,
    city,
    pincode,
    discription
 } = userdata;

 if(firstName.length != 0 && lastName.length != 0 && email.length !=0 && phone.length!=0 && country.length !=0 
  && state.length!=0 && city.length !=0 && pincode.length!=0 && discription.length != 0
 ){

  const result = await fetch('https://recipe-book2-3494d-default-rtdb.firebaseio.com/userDataRecords.json', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      country,
      state,
      city,
      pincode,
      discription
    })

  })

  if(!result){
    <h1>Loading....</h1>
  }

  if(result){
    setError(false);
    setDisableBtn(true);
    alert("Data stored");
    setUserData(
        {
          firstName: ' ',
          lastName: " ",
          email: " ",
          phone: " ",
          country: " ",
          state: " ",
          city: " ",
          pincode: " ",
          discription: " "
        }
    )

  }
  else{
    alert("Not stored");
  }
 }
 else{
  setError(true);
  navigate('/');

 }
 }




  return <>
  <Layout>
  <section class="bg-gray-100 min-h-screen flex box-border justify-center items-center" style={{backgroundImage: "url('https://i.pinimg.com/236x/25/4f/e8/254fe8480f08339ae9a84c74d2cc3c8f.jpg')", backgroundSize: 'cover'}}>
    <div class="bg-[#dac6b3] rounded-2xl flex p-5 items-center m-10">
        <div class="md:w-1/2 px-8">
            <h2 class="font-bold text-3xl text-[#412604] flex justify-center items-center">Contact Us</h2>

            <form method="POST" class="grid grid-cols-2 gap-2" onSubmit={submitData}>
            <input class="p-2 mt-8 rounded-xl border" type="text" name="firstName" value={userdata.firstName} onChange={handleChange} required placeholder="First Name"/>
            <input class="p-2 mt-8 rounded-xl border" type="text" name="lastName" value={userdata.lastName} onChange={handleChange} required placeholder="Last Name"/>
            <input class="p-2 mt-8 rounded-xl border" type="email" name="email" value={userdata.email} onChange={handleChange} required placeholder="Email"/>
            <input class="p-2 mt-8 rounded-xl border" type="number" name="phone" value={userdata.number} onChange={handleChange} required placeholder="Phone Number"/>

            <select className='p-2 mt-8 rounded-xl border' name='country' value={userdata.country} onChange={(e)=>{ handleCountryChange(e); handleChange(e)}}>
              <option>--Country--</option>
              {countryList.map((country)=>(
               <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
              ))}
             </select> 
             <select className='p-2 mt-8 rounded-xl border' name='state' value={userdata.state} onChange={(e)=> {handleStateChange(e); handleChange(e)}}>
              <option>--State--</option>
              {stateList.map((state)=>(
              <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
              ))}
             </select> 
             <select className='p-2 mt-8 rounded-xl border' name='city' value={userdata.city} onChange={(e)=> { handleChange(e)}}>
              <option>--City--</option>
              {cityList.map((city)=>(
              <option key={city.isoCode} value={city.isoCode}>{city.name}</option>
              ))}
             </select> 
            <input class="p-2 mt-8 rounded-xl border" type="number" name="pincode" value={userdata.pincode} onChange={handleChange}required placeholder="Pincode"/>
  
            </form>
            <div>
            <textarea name="discription" rows='5' cols='5' className='p-2 rounded-xl border w-full mt-7' value={userdata.discription} onChange={handleChange} placeholder='Description' required></textarea>
            </div>

            {error ? <div className='font-medium  text-[#cb4444] flex justify-center items-center'>
             Fill all the fields
            </div>: ""}
            <div className="flex justify-center items-center">
            <button class="bg-[#412604] text-white mt-5 px-10 py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" disabled={disabledBtn} onClick={submitData} >Submit</button>
            </div>

        </div>
        <div className="md:block hidden w-1/2 ">
            <img className="rounded-2xl max-h-full w-[500px]" src="https://i.pinimg.com/564x/6c/46/9e/6c469ec86e57cbf9ef308b6afb0b5b38.jpg" alt="login form image" />
        </div>
    </div>
    
</section>
</Layout>
  </>
}

export default Contact;