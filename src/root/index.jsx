// React
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes Module
import ROUTES from '../constants/routes'

class RootComponent extends Component {
	render() {
		return (
			<Switch>
				{ROUTES.map((route, index) => (
					/* Generating Routes from Routes.js Module */

					<Route
						path={route.path}
						component={route.component}
						key={index}
						exact
					/>
				))}
			</Switch>
		)
	}
}

export default RootComponent
