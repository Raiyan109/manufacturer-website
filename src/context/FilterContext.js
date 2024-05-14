import { createContext, useContext, useEffect, useState } from "react";

export const FilterContext = createContext()


export const FilterContextProvider = ({ children }) => {


    const value = {

    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

// Custom hook
export const useCart = () => useContext(FilterContext)