// React
import React, { Component } from 'react'

// Components
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { PlatformCard } from '../../components/Cards'

// API Wrapper
import { getPlatforms } from '../../constants/API'

class PlatformsView extends Component {
	state = {
		results: [], // Results array
		isLoading: true, // Loading State
	}

	componentDidMount() {
		// Call API Wrapper Method
		getPlatforms().then(({ results }) =>
			// Put fetched data into state
			this.setState({ results, isLoading: false })
		)
	}

	render() {
		return (
			<Layout>
				{this.state.isLoading === false ? (
					/* Show if game has been loaded */
					<div className='pl-10 pt-5 w-full h-auto'>
						<h1 className='uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:5xl text-gray-100 mb-4'>
							Platforms
						</h1>

						<div className='flex w-full flex-wrap mb-4 -mx-2'>
							{this.state.results.map((item, index) => (
								/* Show fetched results here */
								<PlatformCard
									key={index}
									name={item.name}
									games={item.games}
									slug={`${item.id}${item.slug}`}
									games_count={item.games_count}
									poster={item.image_background}
								/>
							))}
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

export default PlatformsView
