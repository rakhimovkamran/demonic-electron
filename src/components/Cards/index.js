import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { numberWithCommas } from '../../utils'

// Icon
import { FiUser } from 'react-icons/fi'


// Styled Components
const ImageContainer = styled.div`
    background : url(${ ({poster}) => poster});
    background-size : cover;
    background-position : center;
`

const GenreImageContainer = styled(ImageContainer)`
    box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, .8);
    transition : all .3s;

    &:hover {
        box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, .9);
    }
`


// Components Here
export const GameCard = props => {

    return (
        <div className="px-2 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 sm:mb-4 md:mb-4">
			<div className="bg-gray-900 rounded-lg rounded-b-none shadow-md h-64">
                <ImageContainer className = 'w-full h-full rounded-lg'  poster = { props.poster } />
            </div>
            
            <div className = 'w-full h-auto bg-gray-900 p-4 rounded-lg shadow-md rounded-t-none' >

                <Link to = {`/game/${props.slug}`} >
                    <h1 className = 'text-gray-200 text-lg mb-2'>{ props.name }</h1></Link>

                <h1 className = 'text-gray-700 text-sm mb-1'>
                    Release date: { props.released }
                </h1>

                { props.rating !== 0.0 &&
                    <h1 className = 'text-gray-700 text-sm'>
                        Rating: { props.rating.toFixed(1) }
                    </h1>
                }
                
            </div>
		</div>
    )

}

export const GenreCard = props => {

    return (
        <div className="px-2 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 sm:mb-4 md:mb-4">
			<div className="bg-gray-900 rounded-lg rounded-b-none shadow-md h-32">
                <Link to = {`/genre/${props.slug}`} >
                    <GenreImageContainer className = 'w-full h-full flex justify-center items-center rounded-lg'  poster = { props.poster }>
                        <h1 className = 'text-2xl text-gray-100' >{ props.name }</h1>
                    </GenreImageContainer>
                </Link>
            </div>
            
            <div className = 'w-full h-auto bg-gray-900 p-4 rounded-lg shadow-md rounded-t-none' >

                <h1 className = 'text-gray-600 text-sm mb-4 flex'>
                    <p className = 'flex-1' >Popular items</p>
                    <p>{ numberWithCommas(props.games_count) }</p>
                </h1>  

                { props.games.slice(0, 3).map( (item, index) => (

                    <h1 className = 'text-gray-700 text-sm mb-1 flex' key = { index }>

                        <Link className = 'flex-1' to = {`/game/${item.slug}`} >
                            <p>{ item.name }</p></Link>

                        <p className = 'flex items-center justify-center' >
                            { numberWithCommas(item.added) }<FiUser className = 'inline ml-2' /></p>

                    </h1>  
                ))}
                       
            </div>
		</div>
    )

}
export const PlatformCard = props => {

    return (
        <div className="px-2 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 sm:mb-4 md:mb-4">
			<div className="bg-gray-900 rounded-lg rounded-b-none shadow-md h-32">
                <Link to = {`/platform/${props.slug}`} >
                    <GenreImageContainer className = 'w-full h-full flex justify-center items-center rounded-lg'  poster = { props.poster }>
                        <h1 className = 'text-2xl text-gray-100' >{ props.name }</h1>
                    </GenreImageContainer>
                </Link>
            </div>
            
            <div className = 'w-full h-auto bg-gray-900 p-4 rounded-lg shadow-md rounded-t-none' >

                <h1 className = 'text-gray-600 text-sm mb-4 flex'>
                    <p className = 'flex-1' >Popular items</p>
                    <p>{ numberWithCommas(props.games_count) }</p>
                </h1>  

                { props.games.slice(0, 3).map( (item, index) => (

                    <h1 className = 'text-gray-700 text-sm mb-1 flex' key = { index }>

                        <Link className = 'flex-1' to = {`/game/${item.slug}`} >
                            <p>{ item.name }</p></Link>

                        <p className = 'flex items-center justify-center' >
                            { numberWithCommas(item.added) }<FiUser className = 'inline ml-2' /></p>

                    </h1>  
                ))}
                       
            </div>
		</div>
    )

}