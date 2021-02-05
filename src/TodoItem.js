import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <li onClick={this.handleDelete.bind(this)}>{this.props.content}</li>
        )
    }

    // 子组件通过props接受父组件传递过来的参数
    // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
    handleDelete() {
        //this.props.handleItemDelete(this.props.index);
        const {handleItemDelete, index} = this.props;
        handleItemDelete(index);
    }
}

export default TodoItem