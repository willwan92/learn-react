# JSX简介

JSX，是一个 JavaScript 的语法扩展。它具有 JavaScript 的全部功能。

## 在 JSX 中嵌入表达式

通过大括号可以在 JSX 中嵌入表达式。

    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;

在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );

## JSX 也是一个表达式

在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。

也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：

    function getGreeting(user) {
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }

## JSX 特定属性

可以通过使用引号，来将属性值指定为字符串字面量：

    const element = <div tabIndex="0"></div>;

也可以使用大括号，在属性值中插入一个 JavaScript 表达式：

    const element = <img src={user.avatarUrl}></img>;

对于同一属性不能同时使用这两种符号。

## 警告：

因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。


## 使用 JSX 指定子元素

假如一个标签里面没有内容，你可以使用 /> 来闭合标签：

    const element = <img src={user.avatarUrl} />;

当 JSX 标签里包含多子元素:

    const element = (
        <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
        </div>
    );


## JSX 具有防止注入攻击特性

你可以安全地在 JSX 当中插入用户输入内容：

    const title = response.potentiallyMaliciousInput;
    // 直接使用是安全的：
    const element = <h1>{title}</h1>;

React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。


## JSX 表示对象

Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

以下两种示例代码完全等效：

    const element = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    );

    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );

React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

    // 注意：这是简化过的结构
    const element = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world!'
        }
    };

这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。