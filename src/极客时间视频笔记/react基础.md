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

# react 组件的生命周期

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

# 虚拟DOM 和 key

## diff算法

虚拟 DOM diff算法的两个假设：

- 组件的 DOM 结构是相对稳定的
- 类型相同的兄弟节点可以被唯一标识

虚拟 DOM 采取分层比较计算 diff， 

1. 节点位置发生变化，交换相应的位置
2. 节点属性发生变化，更新相应的属性
3. 节点类型发生变化，删除旧的节点，创建新的节点（删旧建新）
4. 节点跨层移动，删除旧的节点，创建新的节点（删旧建新）

从而将diff算法的复杂度优化到O(n)。


## key 属性的作用

为兄弟节点添加唯一标识，在这些节点顺序发生变化时可以更高效的更新DOM节点，具体来说就是：为这些节点添加了唯一标识，就可以交换这些节点的位置从而完成相应的更新。



	

