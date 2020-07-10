import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`

    transition : all .3s;
    cursor : pointer;

    &:hover {
        background : #4a5568;
    }
`


export default ( props ) => {
    return (

        <Link to = { props.href } >
            <Container className = 'w-full p-2 text-xl text-gray-300 rounded flex justify-center items-center mb-2' >
                <div className="ml-2"><props.Icon/></div>
                <div className="flex-grow ml-5">{props.children}</div>
            </Container>
        </Link>
    )
}