# 理解 React 组件

1. React 组件一般不提供方法，而是某种状态机
2. React 组件可以理解一个纯函数
3. 单向数据绑定

## 创建一个组件的步骤

1. 创建静态 UI
2. 考虑组件的状态组成
3. 考虑组件的交互方式

## 受控组件 & 非受控组件

受控组件状态由使用者维护。

    <input 
        type="text"
        value={this.state.value}
        onChange={evt => 
            this.setState({ value: evt.target.value })
        }
    >

非受控组件元素状态 DOM 自己维护

    <input 
        type="text"
        ref={node => this.input = node}
    >

## 组件创建原则：单一职责原则

1. 每个组件只做一件事
2. 如果组件变得复杂，就应该拆分成小组件

## 数据状态管理：DRY（Don't repeat yourself） 原则

1. 能计算得到的状态就不要单独存储
2. 组件尽量无状态，所需数据通过 props 获取

# 理解 JSX

JSX 的本质：动态创建组件的语法糖

## JSX 使用

JSX 本身就是表达式

