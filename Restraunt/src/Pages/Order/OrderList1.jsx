import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../Context/Context.jsx";
import { setUserProperties } from "firebase/analytics";

const OrderList1 = () => {
  const { orderList } = useContext(MyContext);
  const [quantity, setQuantityNo] = useState(1);

  const AddQuantity=(data)=>{
    // const itemId = data.itemId
    // const updatedQuantity = {...orderList, [itemId]:{...orderList[itemId]}, quantity:orderList[itemId].quantity + 1 }
    // setQuantityNo(updatedQuantity)
    // Find the index of the item in orderList
    const itemId = data.itemId
  const itemIndex = orderList.findIndex(item => item.itemId === itemId);

  if (itemIndex !== -1) {
    const updatedItem = { ...orderList[itemIndex] };
    updatedItem.quantity = updatedItem.quantity + 1;
    const updatedOrderList = [...orderList];
    updatedOrderList[itemIndex] = updatedItem;

    // Set the updated orderList state
    setQuantityNo(updatedOrderList);
  } else {
    console.error(`Item with itemId ${itemId} not found in orderList.`);
  }
  }
  const DecreaseQuantity=(data)=>{
    const itemId = data.itemId
    if (orderList[itemId].quantity > 1) {
        const updatedOrderList = {
          ...orderList,
          [itemId]: {
            ...orderList[itemId],
            quantity: orderList[itemId].quantity - 1
          }
        };
        setQuantityNo(updatedOrderList);
      }
  }

  return (
    <>
    <section>
        <header className="bg-white gap-6 text-black flex justify-evenly p-5 text-[18px] flex-wrap flex-shrink border border-b-2 border-slate-200">
            <div>Cart</div>
            <div>Shipping & Details</div>
            <div>Payment</div>
        </header>
    </section>
    <section className="bg-white w-auto m-0 p-5">
        {orderList.map((data, index) => (
          <div key={data.itemId} className="grid grid-cols-4 m-2 p-3">
            <div>{data.name}</div>
            <div className="flex justify-center items-center flex-wrap flex-shrink">
                       <div>
                        Qty:
                        </div>
                        <div className="flex">
                        <button className="border-2 border-green-400 rounded-full m-0 p-0 w-5 h-5 flex justify-center items-center" onClick={()=>DecreaseQuantity(data)}>-</button>
                        <div className="border-2 border-blue-500 pl-2 pr-2 flex justify-center items-center rounded-md m-0 ml-1 mr-1">{quantity}</div>
                        <button className="border-2 border-green-400 rounded-full m-0 p-0 w-5 h-5 flex justify-center items-center" onClick={()=> AddQuantity(data)}>+</button>
                        </div>
                    </div>
            <div>
              {Array.isArray(data.price) ? (
                data.price.map((priceItem, priceIndex) => (
                  <div key={priceIndex} className="grid grid-cols-4">
                    <span>{priceItem.type}: </span>
                    <span>{priceItem.cost}</span>
                  </div>
                ))
              ) : (
                <div className="">
                <div className="flex justify-end">{data.price}</div>
                </div>
              )}
            </div>
          </div>
        ))}
    </section>
    </>
  );
};

export default OrderList1;
