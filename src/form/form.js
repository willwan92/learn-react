import React, { Component } from 'react'

// 非受控组件
export default class FileInput extends Component {
    constructor(props) {
        super(props);

        this.fileInput = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `你选择了：${this.fileInput.current.files[0].name}`
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择文件：<input type="file" ref={this.fileInput}/>
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}


// export default class NameForm extends Component {
//     constructor(props) {
//         super(props);

//         this.greet = React.createRef();
//     }

//     handleSubmit = (e) => {
//         console.log(this.greet.current.value);
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                <label>
//                    打招呼：<input type="text" ref={this.greet}/>
//                </label>
//                <input type="submit" value="submit" />
//            </form>
//         )
//     }
// }

// 受控组件
// export default class FormSample extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             greet: ''
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             greet: e.target.value
//         })
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     打招呼：<inpue value={this.state.greet}  onChange={this.handleChange}/>
//                 </label>
//             </form>
//         )
//     }
// }