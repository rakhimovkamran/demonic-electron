// React and 3rd party
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'

// Components
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import NotFound from '../../components/NotFound'

// API Wrapper
import { getGameBySlug, getGameScreenshotsBySlug } from '../../constants/API'

class GameView extends Component {
	state = {
		game: {}, // Main game object
		clip: '', // Short clip of game
		shots: [], // Screenshots array

		isLoading: true, // Loading State
		notFound: false, // Not Found State
	}

	componentDidMount() {
		// Get slug from router params
		const { slug } = this.props.match.params

		// Call API Wrapper Method
		getGameBySlug(slug)
			.then((game) =>
				this.setState({
					game,
					clip: game.clip.clips.full,
					isLoading: false,
				})
			)
			// Catch fetching errors here
			.catch(() => this.setState({ notFound: true }))

		// Call API Wrapper Method
		getGameScreenshotsBySlug(slug).then(({ results }) => {
			// Create empty array for screenshots
			let shots = []

			// Push fetched screenshots into array
			results.map((item) =>
				shots.push({ original: item.image, thumbnail: item.image })
			)

			// Put shots into state
			this.setState({ shots })
		})
	}

	render() {
		return (
			<Layout backdrop={this.state.game.background_image}>
				{this.state.isLoading === false ? (
					/* Show if game has been loaded */
					<div className='pl-10 pt-5 w-full h-auto'>
						<h1 className='uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:5xl mb-4 text-gray-100'>
							{this.state.game.name}
						</h1>

						{this.state.game.released && (
							/* Show if game has release date */
							<span className='text-sm text-gray-800 mb-4 shadow-lg rounded-full bg-gray-200 px-4 py-2'>
								Release: {this.state.game.released}
							</span>
						)}

						{this.state.game.rating && (
							/* Show if game has rating */
							<span className='text-sm ml-4 text-gray-800 shadow-lg mb-4 rounded-full bg-gray-200 px-4 py-2'>
								Rating: {+this.state.game.rating}
							</span>
						)}

						{this.state.game.website && (
							/* Show if game has website */
							<a
								href={`${this.state.game.website}`}
								rel='noopener noreferrer'
								target='_blank'>
								<span className='text-md ml-4 text-gray-900 shadow-lg mb-4 rounded-full bg-yellow-500 px-4 py-2'>
									Open game website
								</span>
							</a>
						)}

						{this.state.game.description_raw && (
							/* Show if game has description */
							<div className='w-full h-auto mt-8'>
								<p className='w-full text-gray-200'>
									{this.state.game.description_raw}
								</p>
							</div>
						)}

						{this.state.shots.length !== 0 && (
							/* Show if game has screenshots */
							<>
								<h1 className='uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:5xl mb-4 mt-8 text-gray-100'>
									Screenshots
								</h1>
								<div className='w-full flex justify-center items-center mt-8'>
									<ImageGallery
										thumbnailPosition='left'
										showPlayButton={false}
										items={this.state.shots}
									/>
								</div>
							</>
						)}

						{this.state.clip !== '' && (
							/* Show if game has clip */
							<>
								<h1 className='uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:5xl mb-4 mt-8 text-gray-100'>
									Short Trailer
								</h1>
								<div className='w-full flex justify-center p-4 items-center mt-4'>
									<video
										src={this.state.clip}
										className='rounded-lg border-2 shadow-lg'
										controls></video>
								</div>
							</>
						)}
					</div>
				) : this.state.notFound === false /* Catch Loading */ &&
				  this.state.isLoading /* Catch Not Found */ ? (
					<Loader />
				) : (
					<NotFound what='Information' />
				)}
			</Layout>
		)
	}
}

export default GameView
