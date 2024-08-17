import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const CurrencyInput = ({}) => {
    // let label;
    // let className;
    const data = useRef();
    const [currencyData, setCurrencyData] = useState(null);

    useEffect(() => {
        const fetchData = async (currency = "usd") => {
            try {
                const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                data.current = response.data;
                setCurrencyData(response.data);
                console.log("Data", response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    {/* <div className="w-1/2">
        <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
        >
            
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
        
        </select>
    </div> */}
    {currencyData}
</div>
  )
}

export default CurrencyInput