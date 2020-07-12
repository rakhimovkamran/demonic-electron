// React
import React, { Component } from 'react'

// Components
import Sidebar from '../Sidebar'
import Navigation from '../Navigation'

// Lib
import styled from 'styled-components'

// Styled Components
const Backdrop = styled.div.attrs((props) => ({
	style: {
		background: `url(${props.backdrop})`,
	},
}))`
	background-size: cover;
	background-position: center;

	box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.8);
`

// Main Application Layout
class Layout extends Component {
	render() {
		return (
			<div className='flex'>
				<div className='h-screen hidden md:block lg:block xl:block top-0 sticky'>
					<div className='w-64 h-full p-5 bg-gray-900 shadow-md'>
						<h1 className='w-full center text-gray-700 uppercase text-3xl mb-4 text-center'>
							Demonic
						</h1>
						<Sidebar />
					</div>
				</div>

				{this.props.backdrop ? (
					<Backdrop
						backdrop={this.props.backdrop}
						className='flex-grow p-5 bg-gray-800'>
						{this.props.children}
					</Backdrop>
				) : (
					<div className='flex-grow bg-gray-800'>
						<div className='w-full h-16 sticky left-0 absolute top-0 bg-gray-900 block md:hidden lg:hidden xl:hidden'>
							<Navigation />
						</div>

						<div className='p-5'>{this.props.children}</div>
					</div>
				)}
			</div>
		)
	}
}

export default Layout
