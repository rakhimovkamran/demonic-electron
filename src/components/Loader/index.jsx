import React from 'react'
import styled from 'styled-components'

// Styled
const Spinner = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 4px solid transparent;

	border-bottom-color: #191f2c;
	border-top-color: #191f2c;
`

// Loader Component
export default () => (
	<div className='w-full flex justify-center items-center h-screen bg-gray-800'>
		<Spinner className='spinner' />

		<style jsx='true'>{`
			@keyframes spin {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

			.spinner {
				animation: spin 0.5s linear infinite;
			}
		`}</style>
	</div>
)
