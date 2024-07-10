import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import MyContext from "../../Context/Context";

const Category = () => {
    // const context = useContext(MyContext);
    // const {category, setCategory} = context;

    return (
        <>
            <section>
                <div className="bg-transparent overflow-y-scroll overflow-x-hidden h-[400px]">
                    <div className="m-2 p-2 border border-slate-300 rounded-md">
                        
                    
                    
<div class="relative mb-6">
    <label for="labels-range-input" className="text-black font-semibold text-[17px] flex items-center p-2">Price range</label>
    <div className="p-2">
    <input id="labels-range-input" type="range" value="0" min="50" max="2000" className="w-full h-2  bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
    </div>
    {/* <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span> */}
</div>
</div>

                    <div className="m-2 p-2 border text-black font-semibold text-[17px] items-center border-slate-300 rounded-lg">
                        <div>Veg/Non-veg</div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="veg" />
                            <label htmlFor="veg">Veg</label>
                        </div>
                        <div  className="font-light p-2 text-slate-700 text-[16px] border border-slate-300 rounded-lg">
                            <input type="checkbox" id="non-veg" />
                            <label htmlFor="non-veg">Non-Veg</label>
                        </div>
                    </div>
                    <div className="m-2 p-2 border border-slate-300 text-[17px] items-center text-black font-semibold rounded-lg">
                        <div>Category</div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="south-indian" />
                            <label htmlFor="south-indian">South Indian</label>
                        </div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="starters" />
                            <label htmlFor="starters">Starters</label>
                        </div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="rolls" />
                            <label htmlFor="rolls">Rolls</label>
                        </div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="shakes" />
                            <label htmlFor="shakes">Shakes</label>
                        </div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="pizza" />
                            <label htmlFor="pizza">Pizza</label>
                        </div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="burger" />
                            <label htmlFor="burger">Burger</label>
                        </div>
                        <div className="font-light p-2 text-slate-700 text-[16px]">
                            <input type="checkbox" id="pasta" />
                            <label htmlFor="pasta">Pasta</label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;
