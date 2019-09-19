# 列表 & Key

## 列表渲染

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

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据 id 来作为元素的 key：

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