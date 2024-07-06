import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { auth } from '../../constants/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { useNavigate} from 'react-router-dom'
import { FacebookAuthProvider } from "firebase/auth";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleData = async (e) => {
        console.log("clicked");
        e.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            const userEmail = userCredentials.user.email;
            if (user) {
                localStorage.setItem("userName", JSON.stringify(user));
                localStorage.setItem("userMail", userEmail);
                console.log(user, userEmail);
                navigate('/');
                toast.success("User Signed in successfully", {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            } else {
                console.log("Unsuccessful");
            }
        } catch (error) {
            console.log(error, error.code, error.message);
            setError(error.message);
            toast.error("Error occured while signing in", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };

    const handleGoogleSignIn=async()=>{
        console.log("clicked google");
        // const auth = getAuth();
        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user
            const mail2 = result.user.email
            if(user){
                localStorage.setItem("userMail", mail2)
                toast.success("Signed in successfully", {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                navigate('/');
            }
        }catch(error){
            setError(error, "error during sign-in");
            toast.error("Error while login", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
        
    }

  return <>
<Navbar></Navbar>
<section class="bg-gray-100 min-h-screen flex box-border justify-center items-center" style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/01/81/53/73/240_F_181537393_3LeVm5BDOdcmtIcqmIvlcwfV7jxLLqTF.jpg')", backgroundSize: 'cover'}}>
    <div class="bg-[#dac6b3] rounded-2xl flex max-w-3xl p-5 items-center">
    <div class="md:block hidden w-1/2">
            <img class="rounded-2xl max-h-[1600px] w-[300px]" src="https://i.pinimg.com/236x/39/ee/45/39ee45240fd1064d244ae3fe2627bd1e.jpg" alt="login form image" />
        </div>
        <div class="md:w-1/2 px-8">
            <h2 class="font-bold text-3xl text-[#412604]">SignUp</h2>
            <p class="text-sm mt-4 text-[#412604]">Not a member yet ? Easily SignUp now.</p>

            <form class="flex flex-col gap-4">
                <input class="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter Name" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <div class="relative">
                    <input class="p-2 rounded-xl border w-full" type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <div class="relative">
                    <input class="p-2 mt-5 rounded-xl border w-full" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                   
                </div>
                 
                </div>
                <button class="bg-[#412604] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" onClick={handleData}>SignUp</button>
            </form>
            <div class="mt-6  items-center text-gray-100">
                <hr class="border-gray-300" />
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-300"/>
            </div>
            <button onClick={handleGoogleSignIn} class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                    <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>

                    Login with Google
                </button>

            <div class="mt-4 text-sm flex justify-between items-center container-mr">
                <p class="mr-3 md:mr-0 ">If you already have an account..</p>
                <button onClick={()=> window.location.href = '/login'} class="hover:border register text-white bg-[#412604] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">Login</button>
            </div>
        </div>
        
    </div>
</section>
<Footer></Footer>
  </>
}

export default Signup

