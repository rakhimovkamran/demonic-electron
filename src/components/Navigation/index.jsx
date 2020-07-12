import React from 'react'
import { Link } from 'react-router-dom'

// Navigation for Mobile version of app
export default () => (
	<div className='navigation w-full h-full flex justify-center items-center'>
		<Link to='/'>
			<p className='text-gray-700 mr-4 uppercase text-sm'>Home</p>
		</Link>

		<Link to='/search'>
			<p className='text-gray-700 mr-4 uppercase text-sm'>Search</p>
		</Link>

		<Link to='/discover/platforms'>
			<p className='text-gray-700 mr-4 uppercase text-sm'>Platforms</p>
		</Link>

		<Link to='/discover/genres'>
			<p className='text-gray-700 mr-4 uppercase text-sm'>Genres</p>
		</Link>
	</div>
)
