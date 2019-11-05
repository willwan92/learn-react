import React from 'react';

import { 
	HashRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// 内存路由
// import { MemoryRouter } from 'react-router';

const Home = () => <h1>Home</h1>;
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About us</h1>;


export default class RouterSample extends React.PureComponent {
	render() {
		return (
			<Router>
				<ul id="menu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/hello">Hello</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>

				<div id="page-container">
					<Route path="/">
						<Home />
					</Route>
					<Route path="/hello">
						<Hello />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</div>
			</Router>
		)
	}
}