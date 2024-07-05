import React from "react";
import { useState } from "react";
import { menu } from "../../constants/index.js";

const MenuContent = () => {
  return (
    <section>
      <div className="overflow-y-scroll">
        {menu.map((category) => (
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
                          <div className="grid grid-cols-2 bg-neutral-50 text-slate-500 p-4 m-0 text-[18px] font-extralight border-b-2 border-b-white w-full hover:bg-neutral-200 hover:text-black hover:scale-100 hover:duration-300">
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
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    subCat.items.map((item) => (
                      <div className="bg-neutral-50 grid grid-cols-2  text-slate-500 p-4 m-0 text-[18px] font-extralight border-b-2 border-b-white hover:bg-neutral-200 w-full hover:text-black hover:scale-100 hover:duration-300 ">
                        <div key={item.itemId} id={item.itemId} className=''>
                          {item.name}
                        </div>
                        {Array.isArray(item.price) ? (
                              item.price.map((data) => (
                                <span key={data.type} className=" ">
                                  
                                  <p className="">{data.type}</p>
                                  <p className="">{data.cost}</p>
                                </span>
                              ))
                            ) : (
                              <div className="flex justify-end">Rs {item.price}</div>
                            )}
                      </div>
                    ))
                  )}
                </div>
              ))
            ) : category.items ? (
              category.items.map((item) => (
                <div className="grid grid-cols-2 bg-neutral-50 text-slate-500 p-4 m-0 text-[18px] font-extralight border-b-2 border-b-white w-full hover:bg-neutral-200 hover:text-black hover:scale-100 hover:duration-300">
                  <div key={item.itemId} >{item.name}</div>
                  <div className="flex justify-end">Rs {item.price}</div>
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
