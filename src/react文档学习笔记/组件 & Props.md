# 组件 & Props

组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

## 定义组件：通过函数 或 class

- 通过 JavaScript 函数定义的组件：

		function Welcome(props) {
				return <h1>Hello, {props.name}</h1>;
		}

    该函数接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。

- 还可以使用 ES6 的 class 来定义组件：

		class Welcome extends React.Component {
			render() {
				return <h1>Hello, {this.props.name}</h1>;
			}
		}

## 渲染组件

    const element = <Welcome name="Sara" />;


*注意： 组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签。*

## Props

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 “props”。

例如，下面这段代码会在页面上渲染 “Hello, Sara”：

    function Welcome(props) {
			return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
			element,
			document.getElementById('root')
    );

### Props 的只读性

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。

