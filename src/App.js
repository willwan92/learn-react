import React, { Component } from 'react'

import { 
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';

import './App.css'


import RouterSample from './react-router/RouterSample'
import Calculator from './stateUp/temperatureCalclator'
import CommentBox from './comment-box/CommentBox'
import FormSample from './form-sample/FormSample'
import ProductList from './thinking-in-react/ProductList'
import Clock from './clock/clock.js'
import SnapShotSample from './snapshot-sample/snapshotSample.js'

const routeMap = {
	"router-sample": RouterSample,
	"calculator": Calculator,
	"form-sample": FormSample,
	"react-thinking": ProductList,
	"comment-box": CommentBox,
	"clock": Clock,
	"snap-shot-sample": SnapShotSample,
}

export default class App extends Component {

	render() {
		const routes = Object.keys(routeMap);
		return (
			<div className="app">				
				<Router>
					<ul className="menu-list">
						{
							routes.map(key => (
								<li key={key}>
									<NavLink to={key} activeClassName="active">{key}</NavLink>
								</li>
							))
						}
					</ul>

					<div className="page-container">
							{
								routes.map(key => (
									<Route key={key} path={`/${key}`} component={routeMap[key]}></Route>
								))
							}
					</div>
				</Router>
			</div>
		)
	}
}

