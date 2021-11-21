import { createContext } from "react";

 export const AppColor = createContext();

export const AppColorProvider = ({children}) =>{
    return <AppColor.Provider value = "black">{children}</AppColor.Provider>
}