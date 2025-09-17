import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Create the context (no need to pass children)
export const OrderContext = createContext(); 

// Provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev,
       {...order , uniqueId: uuidv4(), },]);
  };
const clearOrder=()=>{
   setOrders(( ) => [ ]);
} 
const removeOrderItem =(uniqueId)=>{
   setOrders((prev) => prev.filter((item) =>  item.uniqueId !== uniqueId));
}


  return (
    <OrderContext.Provider value={{ orders, addOrder,clearOrder,removeOrderItem }}>
      {children}  
    </OrderContext.Provider>
  );
};
