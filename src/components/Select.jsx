import React from 'react'
const Select = ({currencies, setCurrencies, currFrom, currTo, setCurrFrom, setCurrTo}) => {
  const newCurrencies = Object.entries(currencies);//Converting object to an array


  return (
    <div className="w-[22.5rem] min-h-[7rem] flex flex-col items-center mt-[4rem] gap-[2rem] laptop:w-[40rem] laptop:flex laptop:flex-row laptop:mx-auto">
      <label className='text-lg font-light' >From:</label>
      <select value={currFrom} onChange={(e) => setCurrFrom(e.target.value)} className="w-[15rem] min-h-[2.5rem] outline-none bg-slate-100 rounded-md laptop:w-[20rem] laptop:min-h-[3rem] laptop:text-2xl" name="" id="">
        {newCurrencies.map(([key, value]) => (
          <option  value={key} key={key}>{value}</option>
        ))}
      </select>

      <label className='text-lg font-light' >To:</label>
      <select value={currTo} onChange={(e) => setCurrTo(e.target.value)} className="w-[15rem] min-h-[2.5rem] outline-none bg-slate-100 rounded-md laptop:w-[20rem] laptop:min-h-[3rem] laptop:text-2xl" name="" id="">
        {newCurrencies.map(([key, value]) => (
          <option value={key} key={key}>{value}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
