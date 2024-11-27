import React from 'react'

const SearchBar = ({amount, setAmount}) => {
  return (
    <div className='w-[22rem] flex flex-col justify-center items-center min-h-[2rem] laptop:mx-auto'>
      <label htmlFor="" className='text-lg font-semibold text-sky-300 mr-2 mt-3 laptop:text-3xl laptop:mb-2'>Enter Amount:</label>
      <input className='w-[20rem] min-h-[3.5rem] border-2 border-sky-100 outline-none rounded-full pl-3 text-2xl flex justify-center laptop:w-[30rem]' type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
    </div>
  )
}

export default SearchBar;