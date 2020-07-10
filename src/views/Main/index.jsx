import React, { Component } from 'react'

// Components
import Layout from '../../components/Layout'
import Dropdown from '../../components/Dropdown'
import { GameCard } from '../../components/Cards'
import Loader from '../../components/Loader'

// API Wrapper
import { games, next } from '../../constants/API'

class MainView extends Component {

	state = {

		next : 1,
		results : [],

		orderBy : '-added',
		platform : '4',

		isLoading : true

	}

	componentDidMount () {

		games( this.state.orderBy, this.state.platform ).then(({ results, next }) =>
			this.setState({ results, next, isLoading : false }))
		
	}

	// Load More button action
	loadMore () {

		next(this.state.next).then(({ results, next }) => {
			let merged = [...this.state.results, ...results];
			this.setState({ results : merged, next })
		})
	}

	// Order By action
	orderBy ( type ) {

		this.setState({ orderBy : type.target.value, isLoading : true })

		games(type.target.value, this.state.platform).then(({ results, next }) =>
			this.setState({ results, next, isLoading : false }))
		
	}

	platformBy ( type ) {

		this.setState({ platform : type.target.value, isLoading : true })

		games(this.state.orderBy, type.target.value).then(({ results, next }) =>
			this.setState({ results, next, isLoading : false }))
		
	}

    
    render () {
        return (
            <Layout>

				{ this.state.isLoading === false ?

					<div className="pl-10 pt-5 w-full h-auto">

						<h1 className = 'uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:5xl text-gray-100'>New and trending</h1>
						<h2 className = 'uppercase text-base text-gray-600 mb-8'>Based on player counts and release date</h2>

						<Dropdown onChange = { this.orderBy.bind(this) }>
            				<option value = '-added' defaultValue>Order by: Date Added</option>
            				<option value = '-released'>Order by: Date Released</option>
							<option value = '-name' >Order by: Name</option>
            				<option value = 'created'>Order by: Date Created</option>
            				<option value = '-rating'>Order by: Rating</option>
						</Dropdown>


						<Dropdown onChange = { this.platformBy.bind(this) }>
            				<option value = '4' defaultValue >Platform: PC</option>
            				<option value = '18'>Platform: PlayStation 4</option>
            				<option value = '1'>Platform: XBOX</option>
            				<option value = '21'>Platform: Android</option>
            				<option value = '3'>Platform: IOS</option>
						</Dropdown>

						<div className="flex w-full flex-wrap mb-4 -mx-2">
							{ this.state.results.map( ( item, index ) => (
								<GameCard 
									key = { index }
									name = { item.name }
									released = { item.released }
									rating = { item.rating }
									slug = { item.slug }
									poster = { item.background_image } />
							))}
						</div>

						<div className="w-full text-center p-4 mb-4">
							<button 
								onClick = { () => this.loadMore() } 
								className = 'w-32 p-4 bg-gray-900 text-gray-200 rounded-full shadow-lg' >Load More</button>
						</div>


					</div> 
					
					: <Loader/>
				}
			</Layout>
        )
    }

}


export default MainView