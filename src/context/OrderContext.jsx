import { createContext, useState } from "react";

// Create the context (no need to pass children)
export const OrderContext = createContext(); 

// Provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}  
    </OrderContext.Provider>
  );
};
