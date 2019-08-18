# React 元素（虚拟dom）

元素是构成 React 应用的最小单元。

    const element = <h1>Hello, world</h1>;

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

*注意：不要把元素和组件混淆，组件是由元素构成的。*

## 通过 ReactDOM.render 方法可将 React 元素渲染为 DOM

假设 在 HTML 文件某处有一个 <div>：

    <div id="root"></div>

将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()：

    onst element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));

id 为 root 的 div 称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。

仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

## 更新已渲染的元素时，React 只更新它需要更新的部分。

React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

例如：

    function tick() {
        const element = (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }

    setInterval(tick, 1000);


尽管每一秒我们都会新建一个描述整个 UI 树的元素，但是 React DOM 只会更新实际改变了的内容，也就是例子中的时间。