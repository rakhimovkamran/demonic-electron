// React
import React from 'react'

// Components
import Button from './Button'

// Icons
import { FaGamepad, FaMagento, FaHome, FaSearch } from 'react-icons/fa'

// Navigation for Large Devices
export default () => {
	return (
		<div className='sidebar'>
			<Button href='/' Icon={FaHome}>
				Home
			</Button>

			<Button href='/search' Icon={FaSearch}>
				Search
			</Button>

			<Button href='/discover/platforms' Icon={FaGamepad}>
				Platforms
			</Button>

			<Button href='/discover/genres' Icon={FaMagento}>
				Genres
			</Button>
		</div>
	)
}
