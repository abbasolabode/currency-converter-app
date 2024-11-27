import React from 'react'

const Button = ({handleSwitchCurrency}) => {



  return (
		<div className='w-[22.5rem] min-h-[4rem] flex justify-center  gap-5 mt-[4rem] laptop:mx-auto'>
			{/* <button className='w-[4.2rem] min-h-[4.2rem] rounded-full shadow-2xl bg-cyan-100 text-white font-bold hover:bg-sky-200 hover:transition-all' type="button">Convert</button> */}
			<button  onClick={handleSwitchCurrency} className='w-[4.2rem] min-h-[4.2rem] rounded-full shadow-2xl bg-sky-500 text-white font-bold hover:bg-rose-400 hover:transition-all'  type="button">Switch</button>
		</div>
	);
}

export default Button;
