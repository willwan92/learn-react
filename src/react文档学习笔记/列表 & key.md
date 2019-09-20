# 列表 & Key

## 数组列表渲染

通过 map 方法构建一个元素集合。

	function NumberList(props) {
		const numbers = props.numbers;
		const listItems = numbers.map((number) =>
			<li key={number.toString()}>{number}</li>
		);
		return (
			<ul>{listItems}</ul>
		);
	}

	const numbers = [1, 2, 3, 4, 5];
	ReactDOM.render(
		<NumberList numbers={numbers} />,
		document.getElementById('root')
	);

## key

key 的作用是让 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识，否则会报出警告。

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串，key 只是在兄弟节点之间必须唯一。通常，我们使用来自数据 id 来作为元素的 key：

	const todoItems = todos.map((todo) =>
		<li key={todo.id}>
			{todo.text}
		</li>
	);

当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key（不推荐）：

	const todoItems = todos.map((todo, index) =>
		// Only do this if items have no stable IDs
		<li key={index}>
			{todo.text}
		</li>
	);

如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 Robin Pokorny 的 [深度解析使用索引作为 key 的负面影响](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) 这一篇文章。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。

## 用 key 提取组件

key 属性应该在 map() 方法中的元素上设置。

	function ListItem(props) {
		// 正确！这里不需要指定 key：
		return <li>{props.value}</li>;
	}

	function NumberList(props) {
		const numbers = props.numbers;
		const listItems = numbers.map((number) =>
			// 正确！key 应该在数组的上下文中被指定
			<ListItem key={number.toString()} value={number} />
		);
		return (
			<ul>
				{listItems}
			</ul>
		);
	}

	const numbers = [1, 2, 3, 4, 5];
	ReactDOM.render(
		<NumberList numbers={numbers} />,
		document.getElementById('root')
	);

key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：

	const content = posts.map((post) =>
		<Post
			key={post.id}
			id={post.id}
			title={post.title} />
	);

## 在 JSX 中嵌入 map()

在上面的例子中，我们声明了一个单独的 listItems 变量并将其包含在 JSX 中：

	function NumberList(props) {
		const numbers = props.numbers;
		const listItems = numbers.map((number) =>
			// 正确！key 应该在数组的上下文中被指定
			<ListItem key={number.toString()} value={number} />
		);
		return (
			<ul>
				{listItems}
			</ul>
		);
	}

JSX 允许在大括号中嵌入任何表达式，所以我们也可以内联 map() 返回的结果：

	function NumberList(props) {
		const numbers = props.numbers;
		return (
			<ul>
				{numbers.map((number) =>
					<ListItem key={number.toString()} value={number} />
				)}
			</ul>
		);
	}

这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。*如果一个 map() 嵌套了太多层级，那可能就是你提取组件的一个好时机。*

