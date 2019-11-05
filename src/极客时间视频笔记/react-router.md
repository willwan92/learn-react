# React Router

路由不只是页面切换，更是代码组织方式

## 为什么需要路由

1.单页应用需要进行页面切换
2.通过 URL 可以定位到页面
3.更有语义的组织资源 


## 路由实现的基本架构

路由定义 (路由配置) => 路由处理（React Router） => 视图显示 （渲染对应的组件）

## React Router使用

	import React from 'react';

	import { 
		BrowserRouter as Router,
		Route,
		Link
	} from 'react-router-dom';

	const Home = () => <h1>Home</h1>;
	const Hello = () => <h1>Hello</h1>;
	const About = () => <h1>About us</h1>;

	export default class RouterSample extends React.PureComponent {
		render() {
			return (
				<Router>
					<ul id="menu">
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/hello">Hello</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>

					<div id="page-container">
						// 路由定义
						<Route path="/home">
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

## React Router 的特性

1. 声明式路由定义

		<div id="page-container">
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/hello">
				<Hello />
			</Route>
			<Route path="/about">
				<About />
			</Route>
		</div>

2. 动态路由

React Router是在页面render的时候才进行解析的，是动态的。如果没有渲染 `<Route path="/about"> <About /> </Route>`这个标记，就不存在这条路由配置。这不同于服务端的路由配置（静态的）。

##　React Router三种路由实现

1. BrowserRouter，根据HTML5 history API实现。
2. HashRouter，根据window.location.hash的改变实现。
3. MemoryRouter，路由变化不反映在url上，而是在内存中，通常用在服务端渲染等非浏览器环境中。







