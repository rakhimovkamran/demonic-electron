// React
import React, { Component } from 'react'

// Components
import Layout from '../../components/Layout'
import NotFound from '../../components/NotFound'

import { GameCard } from '../../components/Cards'
import { FaSearch } from 'react-icons/fa'

// API Wrapper
import { getGameBySearch } from '../../constants/API'

class SearchView extends Component {
	state = {
		results: [], // Results array
		notFound: false, // Not Found State
	}

	componentDidMount() {
		// Call API Wrapper Method with my lovely game)
		getGameBySearch('Skyrim').then(({ results }) =>
			this.setState({ results })
		)
	}

	// Catch input event
	inputChange(e) {
		this.setState({ query: e.target.value })
	}

	// Main Search method
	search() {
		// Return notFound state to default state on each call
		this.setState({ notFound: false })

		// Call API Wrapper Method with input.value
		getGameBySearch(this.state.query).then(({ results }) =>
			results.length === 0
				? this.setState({ notFound: true })
				: this.setState({ results })
		)
	}

	render() {
		return (
			<Layout>
				<div className='pl-10 pt-5 w-full h-auto'>
					<div className='w-full flex mb-4'>
						<input
							onChange={this.inputChange.bind(this)}
							placeholder='Search games...'
							type='text'
							className='w-64 flex-1 text-gray-100 p-4 bg-gray-900 rounded-lg shadow-lg'
						/>

						<button
							onClick={this.search.bind(this)}
							className='p-4 flex justify-center items-center text-xl text-gray-100 w-16 ml-4 rounded-lg shadow-lg bg-gray-900'>
							<FaSearch />
						</button>
					</div>

					<div className='flex w-full flex-wrap mb-4 -mx-2'>
						{this.state.notFound ? (
							/* Show if game not found */
							<NotFound what='Game' />
						) : (
							/* Show fetched results here */
							<>
								{this.state.results.map((item, index) => (
									<GameCard
										key={index}
										name={item.name}
										released={item.released}
										rating={item.rating}
										slug={item.slug}
										poster={item.background_image}
									/>
								))}
							</>
						)}
					</div>
				</div>
			</Layout>
		)
	}
}

export default SearchView
