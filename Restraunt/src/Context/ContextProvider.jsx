import MyContext from "./Context";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ContextProvider({ children }) {
  const [orderList, setOrderList] = useState(() => {
    const savedOrders = localStorage.getItem('orderList');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('orderList', JSON.stringify(orderList));
  }, [orderList]);

  const addItem = async (data) => {
    try {
      const itemtoAdd = {...data, quantity: 1}
      setOrderList((prevList) => [...prevList, itemtoAdd ]);
      toast.success("Added successfully in cart", {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    } catch (error) {
      console.log(error);
      toast.error("Error occurred", {
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

  return (
    <MyContext.Provider value={{ orderList, setOrderList, addItem }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
