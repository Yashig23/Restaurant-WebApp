import React from "react";
import { useState } from "react";
import { useContext } from "react";
import MyContext from "../../Context/Context.jsx";
import { menu } from "../../constants/index.js";

const MenuContent = () => {
 
  const context = useContext(MyContext);
  const {addItem, orderList, setOrderList,  searchQuery, setSearchQuery, displayItems, setDisplayItems} = context

  return (
    <section>
      <div className="overflow-y-scroll h-[900px]">
        {displayItems.map((category) => (
          <div key={category.id} className="text-[21px] font-normal m-2  ">
            {category.name}
            {category.subcategories ? (
              category.subcategories.map((subCat) => (
                <div key={subCat.subId} className="p-2">
                  <div className="text-[19px] font-normal p-2 m-1">{subCat.name}</div>
                  {subCat.subsubcategories ? (
                    subCat.subsubcategories.map((subSubCat) => (
                      <div key={subSubCat.id} className='bg-neutral-50 p-2'>
                        <h4 className="text-[19px] font-normal p-2">{subSubCat.name}</h4>
                        {subSubCat.items.map((item) => (
                          <div className="grid grid-cols-3 bg-neutral-50 text-slate-500 p-4 m-0 text-[18px] font-extralight border-b-2 border-b-white w-full hover:bg-neutral-200 hover:text-black hover:scale-100 hover:duration-300">
                            <div key={item.itemId} id={item.itemId} className=''>
                              {item.name}
                            </div>
                            {Array.isArray(item.price) ? (
                              item.price.map((data) => (
                                <span key={data.type} className="flex justify-center">
                                 
                                  <p className="">{data.type}</p>
                                  <p className="">{data.cost}</p>
                                  
                                </span>
                              ))
                            ) : (
                              <div className="flex justify-end">Rs {item.price}</div>
                              
                            )}
                  <div className="flex justify-end"><button onClick={() => addItem(item)} className="pt-1 pb-1 pl-3 pr-3 rounded-md border-2 border-slate-200 font-normal text-green-400 text-[15px] hover:bg-green-400 hover:text-white hover:scale-110 hover:font-medium duration-300 ">Add</button></div>    
                          </div>
                          
                        ))}
                        {/* <div className="flex justify-end"><button className="pt-1 pb-1 pl-3 pr-3 rounded-md border-4 border-green-300 font-normal">Add</button></div>     */}
                      </div>
                    ))
                  ) : (
                    subCat.items.map((item) => (
                      <div className="bg-neutral-50 grid grid-cols-4  text-slate-500 p-4 m-0 text-[18px] font-extralight border-b-2 border-b-white hover:bg-neutral-200 w-full hover:text-black hover:scale-100 hover:duration-300 ">
                        <div key={item.itemId} id={item.itemId} className=''>
                          {item.name}
                        </div>
                        {Array.isArray(item.price) ? (
                              item.price.map((data) => (
                                <span key={data.type} className="">
                                  <p className="">{data.type}</p>
                                  <p className="">{data.cost}</p>
                                </span>
                              ))
                            ) : (
                              <div className="flex justify-end">Rs {item.price}</div>
                            )}
                        <div className="flex justify-end"><button onClick={() => addItem(item)} className="pt-1 pb-1 pl-3 pr-3 rounded-md border-2 border-slate-200 font-normal text-green-400 text-[15px] hover:bg-green-400 hover:text-white hover:scale-110 hover:font-medium duration-300 ">Add</button></div>    
                      </div>
                    ))
                  )}
                </div>
              ))
            ) : category.items ? (
              category.items.map((item) => (
                <div className="grid grid-cols-3 bg-neutral-50 text-slate-500 p-4 m-0 text-[18px] font-extralight border-b-2 border-b-white w-full hover:bg-neutral-200 hover:text-black hover:scale-100 hover:duration-300">
                  <div key={item.itemId} >{item.name}</div>
                  <div className="flex justify-end">Rs {item.price}</div>
                  <div className="flex justify-end"><button onClick={() => addItem(item)}  className="pt-1 pb-1 pl-3 pr-3 rounded-md border-2 border-slate-200 font-normal text-green-400 text-[15px] hover:bg-green-400 hover:text-white hover:scale-110 hover:font-medium duration-300 ">Add</button></div>    
                </div>
              ))
            ) : (
              <div className="text-[17px] font-thin bg-slate-50 p-2">No items Present</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuContent;
