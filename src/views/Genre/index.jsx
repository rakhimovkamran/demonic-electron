// React
import React, { Component } from 'react'

// Components
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { GameCard } from '../../components/Cards'

// API Wrapper
import { getGamesByGenre, next } from '../../constants/API'

class GenreView extends Component {
	state = {
		next: '', // Next link for fetching data
		results: [], // Results array
		isLoading: true, // Loading State
	}

	componentDidMount() {
		// Get slug from router params
		const { slug } = this.props.match.params

		// Call API Wrapper Method
		getGamesByGenre(slug).then(({ results, next }) =>
			// Put results into state
			this.setState({ results, next, isLoading: false })
		)
	}

	// Load More button action
	loadMore() {
		// Call API Wrapper for fetch next results
		next(this.state.next).then(({ results, next }) => {
			let merged = [...this.state.results, ...results]
			this.setState({ results: merged, next })
		})
	}

	render() {
		// Get slug from router params
		const { slug } = this.props.match.params

		return (
			<Layout>
				{this.state.isLoading === false ? (
					/* Show if game has been loaded */
					<div className='pl-10 pt-5 w-full h-auto'>
						<h1 className='uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:5xl text-gray-100 mb-4'>
							{slug.replace(/-/g, ' ')}
						</h1>

						<div className='flex w-full flex-wrap mb-4 -mx-2'>
							{this.state.results.map((item, index) => (
								/* Show fetched results here */
								<GameCard
									key={index}
									name={item.name}
									released={item.released}
									rating={item.rating}
									slug={item.slug}
									poster={item.background_image}
								/>
							))}
						</div>

						<div className='w-full text-center p-4 mb-4'>
							<button
								onClick={() => this.loadMore()}
								className='w-32 p-4 bg-gray-900 text-gray-200 rounded-full shadow-lg'>
								Load More
							</button>
						</div>
					</div>
				) : (
					/* Show if game data is loading */
					<Loader />
				)}
			</Layout>
		)
	}
}

export default GenreView
