// React
import React from 'react'

// Icon
import { AiOutlineWarning } from 'react-icons/ai'

// Not Found Component
export default (props) => (
	<div className='w-full flex justify-center flex-col items-center h-screen bg-gray-800'>
		<AiOutlineWarning className='text-5xl text-gray-900' />
		<h1 className='text-gray-900 mt-4 text-xl'>
			{props.what} is not available yet
		</h1>
	</div>
)
