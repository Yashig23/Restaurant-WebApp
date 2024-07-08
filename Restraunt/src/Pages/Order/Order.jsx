import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import OrderList1 from "./OrderList1";
import { useContext } from "react";
import MyContext from "../../Context/Context.jsx";
import OrderSum1 from "./OrderSum1"; // Assuming this is another component you have

const Order = () => {
  const { orderList } = useContext(MyContext);
  console.log(orderList)

  return (
    <>
      <Navbar />
      <section className='pt-6 '>
        <div className="p-5  bg-black text-white flex justify-center items-center text-[22px] font-light flex-wrap"> Order </div>
      </section>
      <div className=''>
        <div>
        <OrderList1 />
        </div>
        {/* <div>
        <OrderSum1 />
        </div> */}
      </div>  
    </>
  );
};

export default Order;
