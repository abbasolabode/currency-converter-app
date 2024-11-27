import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import DisplayAmount from './DisplayAmount';
import Button from './Button';
import Select from './Select';
import { useEffect, useState } from 'react';

const Main = () => {
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currFrom, setCurrFrom] = useState("");
  const [currTo, setCurrTo] = useState("");
  const [receivedData, setReceivedData] = useState({});

  const convertedCurrency = receivedData?.rates?.[currTo] ?? "Data unavailable....⛔";
  const date = receivedData?.date;

   console.log(receivedData, date);


   
   /* Switch currency */
   function handleSwitchCurrency() {
	 setCurrFrom(currTo);
	 setCurrTo(currFrom);
   }

  useEffect(() => {
    const controller = new AbortController();
    async function fetchCurrency() {[]
      try {
        setIsLoading(true);
        const res = await fetch("https://api.frankfurter.app/currencies", { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch currencies");
        const data = await res.json();
        setCurrencies(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCurrency();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!amount || !currFrom || !currTo)return;

    const controller = new AbortController();
    const fetchConversion = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currFrom}&to=${currTo}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch conversion data");
        const data = await res.json();
        setReceivedData(data);
		setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversion();
    return () => controller.abort();
  }, [amount, currFrom, currTo]);




  return (
    <div className="w-[22.5rem] min-h-[45rem] border bg-white mx-auto mt-[3rem] shadow-2xl rounded-lg laptop:w-[90rem] laptop:min-h-[rem] laptop:mx-auto">
      <Header>
        <p>Currency Converter</p>
      </Header>
      <SearchBar amount={amount} setAmount={setAmount} />
      <DisplayAmount amount={amount} isLoading={isLoading} convertedCurrency={convertedCurrency} error={error} currFrom={currFrom} date={date}/>
      <Button handleSwitchCurrency={handleSwitchCurrency}/>
      <Select currencies={currencies} currFrom={currFrom} currTo={currTo} setCurrFrom={setCurrFrom} setCurrTo={setCurrTo} />
    </div>
  );
};


export default Main;



