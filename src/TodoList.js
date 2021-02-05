
import React, {Component, Fragment} from 'react';
import TodoItem from'./TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    // bind when the class is created
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getTodoItems = this.getTodoItems.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' onClick={this.handleAddBtnClick}>Add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }

  getTodoItems() {
    return (this.state.list.map(
      (item, index) => {
      // 父组件通过属性的形式向子组件传递参数
      // 子组件通过props接受父组件传递过来的参数
      return (<TodoItem 
        handleItemDelete = {this.handleDelete} 
        key={index} 
        content={item} 
        index={index}/>
        );
      }));
  }

  handleAddBtnClick() {
    if (this.state.inputValue.trim().length === 0) {
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleDelete(index) {
    const newlist = [...this.state.list];
    newlist.splice(index, 1);
    
    this.setState({
      list: newlist
    });
  }

}

export default TodoList;
