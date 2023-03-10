import { createContext, useState } from "react";

export const CurrencyContext =  createContext();

const CurrencyProvider=({ children  }) => {
    const [fromCurrency, setFromCurrency] = useState("πΊπΈ USD - United States");
    const [toCurrency, setToCurrency] = useState("π¦πΊ AUD - Australia");
    const [firstAmount, setFirstAmount] = useState("");

  
    const value ={
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    };
    return (
    <CurrencyContext.Provider value={value}>
        {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;