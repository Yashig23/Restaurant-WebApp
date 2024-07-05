import React from "react";
import { useState } from "react";
import { menu } from '../../constants/index'

function SearchBar(){
   return(
    <>
    <section>
        <div className="flex justify-center m-3 ">
            <div className="w-1/4 text-[25px] m-2 flex justify-center p-4">
                <h1>Search</h1>
            </div>
            <div className=" border-4 rounded-full p-0 w-1/2 m-3 flex justify-center">
                <input type="text" id="input-var" className="p-3 w-full border-4 rounded-full"></input>
            </div>
        </div>
    </section>
    </>
   )
}

export default SearchBar