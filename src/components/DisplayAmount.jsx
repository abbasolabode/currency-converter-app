import React from 'react'

const DisplayAmount = ({ convertedCurrency, error, currFrom, date }) => {
  return error ? (
		<div className="w-full min-h-[5rem] flex justify-center items-center text-2xl text-red-500 laptop:">
			{error}
		</div>
	) : (
		<p className="w-full min-h-[4rem] flex flex-col justify-between items-center text-3xl font-light leading-7 tracking-wider mt-8 text-green-500">
			{convertedCurrency} {currFrom} <span className='flex flex-col pl-2 text-blue-500'>Today: {date}</span>
		</p>
	);

};

export default DisplayAmount;


