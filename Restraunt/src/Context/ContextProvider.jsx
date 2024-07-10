import MyContext from "./Context";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { menu } from "../constants/index";

function ContextProvider({ children }) {

  {/* for adding the items from menu */}
  const [orderList, setOrderList] = useState(() => {
    const savedOrders = localStorage.getItem('orderList');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });
  const [displayItems, setDisplayItems] = useState(menu);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

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
     {/* for search bar */}

     useEffect(()=>{
      if(searchQuery){
       const filterFun = menu.filter(items=> items.name.toLowerCase().includes(searchQuery.toLowerCase()))
      //  || menu.filter(items=> items.category.name.toLowerCase().includes(searchQuery.toLowerCase()))
      //  || menu.filter(items=> items.subcategories.name.toLowerCase().include(searchQuery.toLowerCase()))
      //  ;
      setDisplayItems(filterFun);
      }
      else{
        setDisplayItems(menu);
      }
  }, [searchQuery])

  {/* for category filter section */}
   useEffect(()=>{
     const CategoryFun = menu.filter()
   }, [category])

  return (
    <MyContext.Provider value={{ orderList, setOrderList, addItem, searchQuery, setSearchQuery, displayItems, setDisplayItems, category, setCategory}}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
