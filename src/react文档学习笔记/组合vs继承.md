# 组合 vs 继承

React 有十分强大的组合模式。推荐使用组合而非继承来实现组件间的代码重用。

## 特例关系

可以把一些组件看作是其他组件的特殊实例，比如 WelcomeDialog 可以说是 Dialog 的特殊实例。

	function Dialog(props) {
		return (
			<FancyBorder color="blue">
				<h1 className="Dialog-title">
					{props.title}
				</h1>
				<p className="Dialog-message">
					{props.message}
				</p>
			</FancyBorder>
		);
	}

	function WelcomeDialog() {
		return (
			<Dialog
				title="Welcome"
				message="Thank you for visiting our spacecraft!" />
		);
	}

组合也同样适用于以 class 形式定义的组件。

## 包含关系

有些组件在定义时我们可能无法提前知道子组件的内容，例如通用容器的组件(如: Dialog)等，建议使用特定的`children`属性来传递它们的子组件内容（功能类似vue的插槽）。

	function FancyBorder(props) {
		return (
			<div className={'FancyBorder FancyBorder-' + props.color}>
				{props.children}
			</div>
		);
	}

可以将任意组件作为子组件传递给它们。

	function WelcomeDialog() {
		return (
			<FancyBorder color="blue">
				<h1 className="Dialog-title">
					Welcome
				</h1>
				<p className="Dialog-message">
					Thank you for visiting our spacecraft!
				</p>
			</FancyBorder>
		);
	}

如果需要在一个组件中预留出几个“洞”，可以自行约定 props，并使用相应地 props。例如：

	function SplitPane(props) {
		return (
			<div className="SplitPane">
				<div className="SplitPane-left">
					{props.left}
				</div>
				<div className="SplitPane-right">
					{props.right}
				</div>
			</div>
		);
	}

	function App() {
		return (
			<SplitPane
				left={
					<Contacts />
				}
				right={
					<Chat />
				} />
		);
	}

`<Contacts />` 和 `<Chat />` 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props，像其他数据一样传递。


