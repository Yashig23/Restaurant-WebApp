import React from "react";
import { useState, useEffect } from "react";
import { menu } from '../../constants/index'
import { useContext } from "react";
import MyContext from "../../Context/Context";

function SearchBar(){
     const [state, setState] = useState("");
     const context = useContext(MyContext);
     const {searchQuery, setSearchQuery} = context;

     useEffect(()=>{
       const timer = setTimeout(()=>{
         console.log("search request");
       }, [500])

       return()=>( clearTimeout(timer))
     }, [searchQuery])

   return(
    <>
    <section>
        <div className="flex justify-center m-3 ">
            <div className="w-1/4 text-[25px] m-2 flex justify-center p-4">
                <h1>Search</h1>
            </div>
            <div className=" border-4 rounded-full p-0 w-1/2 m-3 flex justify-center">
                <input type="text" id="input-var" onChange={(e)=>setSearchQuery(e.target.value)} className="p-3 w-full border-4 rounded-full"></input>
            </div>
        </div>
        <div className="text-black text-[20px]">{searchQuery}</div>
    </section>
    </>
   )
}

export default SearchBar