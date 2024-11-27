import React from 'react'

const Header = ({children}) => {
  return (
		<div>
			<h1 className="w-[22.5rem] min-h-[5rem] flex items-center justify-center text-2xl font-bold ml-4 text-gray-500 laptop:text-4xl">
				{children}
			</h1>
		</div>
	);
}

export default Header;
