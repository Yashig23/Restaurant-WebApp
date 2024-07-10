import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import MyContext from "../../Context/Context";

const Category=()=>{
    
    const context = useContext(MyContext);
    const {category, setCategory} = context;

    return (
        <>
        <section>
            <div className="bg-transparent">
                <div className="m-2 p-2 border border-slate-700">
                    <div>Price Range</div>
                    <input type="range" ></input>
                </div>
                <div className="m-2 p-2 border border-slate-700">
                    <div>Veg/Non-veg</div>
                    <div>
                        <input type="checkbox" >Veg</input>
                    </div>
                    <div>
                        <input type="checkbox">Non-Veg</input>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
        </>
    )
}

export default Category