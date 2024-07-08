import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import MyContext from "../../Context/Context.jsx";

const OrderSum1=()=>{
const context = useContext(MyContext)
const {orderList, setOrderList} = context

    return (
        <>
          <section>
      <div className="bg-pink-600 text-white p-5 m-2 w-full">
        {orderList.map((data, index) => (
          <div key={index}>
            <div>
              {Array.isArray(data.price) ? (
                data.price.map((priceItem, priceIndex) => (
                  <div key={priceIndex}>
                    <span>{priceItem.type}: </span>
                    <span>{priceItem.cost}</span>
                  </div>
                ))
              ) : (
                <div>{data.price}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
        </>
    )
}

export default OrderSum1