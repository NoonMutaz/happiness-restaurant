import { createContext, useState } from "react";
 
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user , setUser ] = useState({
    name: " ",
    email: "",
    phone: "0501234567",
    password: "password123"
  });

  return (
    <UserContext.Provider value={{ user ,  setUser }}>
      {children}
    </UserContext.Provider>
  );
};