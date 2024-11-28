import React from 'react'

const DisplayAmount = ({ convertedCurrency, error, currFrom, date }) => {

    if(convertedCurrency === "Data unavailable...") return <p className="w-full min-h-[5rem] flex justify-center items-center text-2xl text-red-500 laptop:">Data unavailable...</p>;

  return error ? (
		<div className="w-full min-h-[5rem] flex justify-center items-center text-2xl text-red-500 laptop:">
			{error}
		</div>
	) : (
		<p className="w-full min-h-[4rem] flex flex-col justify-between items-center text-3xl font-light leading-7 tracking-wider mt-[1rem] text-green-500 ">
			{convertedCurrency} {currFrom} <span className='flex pl-2 text-blue-500 mt-[1rem]'> <span className='flex items-center text-sm pr-3 text-gray-400 min-h-[2.5rem]'>as of:</span>{date}</span>
		</p>
	);

};

export default DisplayAmount;


