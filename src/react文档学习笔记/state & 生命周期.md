## react 组件的生命周期

react 组件的生命周期可以分为三个阶段：

1. 创建时
2. 更新时
3. 卸载时

对应的有以下生命周期方法：

- constructor

	1. 用于初始化内部状态，很少使用
	2. 唯一可以直接修改state的地方

- getDerivedStateFromProps

	1. 当state需要从来自外部的props属性初始化时使用
	1. 尽量不要使用，因为维护两者状态的一致性会增加复杂度
	1. 每次render都回调用
	1. 典型应用场景：表单控件获取默认值
 
 - componentDidMount

	1. UI渲染完成后调用
	1. 只执行一次
	1. 典型应用场景：Ajax获取外部数据

- componentWillUnmount

	1. 组件移除时调用
	1. 典型应用场景：资源释放

- getSnapshotBeforeUpdate

	1. 在页面render之前调用，state已更新
	1. 典型应用场景：获取render之前的DOM状态

- componentDidUpdate

	1. 每次UI更新时调用
	1. 典型应用场景：页面需要根据props变化重新获取数据 ????

- shouldComponentUpdate

	1. 决定 Virtual DOM 是否需要重绘
	1. 一般不需要自己处理，可以由 React 提供的 PureComponent 自动实现，
	1. 典型应用场景：性能优化

## state 是组件私有的，完全受控于当前组件

正确使用state：

1. 不能直接修改state，应该使用setState()修改state

		// Correct
		this.setState({comment: 'Hello'});

		// Wrong
		this.state.comment = 'Hello';

1. State 的更新可能是异步的，所以不要依赖他们的值来更新下一个状态。

	出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。

	因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

		// Correct
		this.setState((state, props) => ({
			counter: state.counter + props.increment
		}));

		// Wrong
		this.setState({
			counter: this.state.counter + this.props.increment,
		});		

1. 自上而下的数据流
