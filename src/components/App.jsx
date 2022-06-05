import React, { Component } from "react";
import Counter from './counter'
import Dropdown from "./DropDown";
import ColorPicker from "./ColorPicker";
import TodoList from "./TodoList";
import Form from "./Form";



const colorPickerOptions = [
  { lable: 'red', color: '#f44336' },
  { lable: 'green', color: '#4caf50' },
  { lable: 'blue', color: '#2196f3' },
  { lable: 'grey', color: '#607d8b' },
  { lable: 'pink', color: '#e91e63' },
  { lable: 'indigo', color: '#3f51b5' },
  
];

const initialTodos = [
  { id: 'id-1', text: 'Что нибудь 1', completed: false },
  { id: 'id-2', text: 'Что нибудь 2', completed: false },
  { id: 'id-3', text: 'Что нибудь 3', completed: false },
  { id: 'id-4', text: 'Что нибудь 4', completed: false },
];


// export const App = () => {
//   return (
//     <>
//       {/* <h1>Состояние компонента</h1> */}
//       <Counter />

//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//       <TodoList />

//     </>
//   )
// };


class App extends Component {
  state = {
    todos: initialTodos,
    // name: '',
    // tag:''
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };


  formSubmitHandler = data => {
    console.log(data);
  }


  // handleChange = e => {
  //   this.setState({
  //     [e.currentTarget.name]: e.currentTarget.value
  //   });
  // };

  handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state)
    
  // }

  render() { 
    const { todos } = this.state;
    return (
      <>
        <h1>Состояние компонента</h1>
        <Form onSubmit={ this.formSubmitHandler}/>
        <Counter />

        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Имя <input type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Прозвище
            <input type="text"
              name="tag"
              value={this.state.tag}
            onChange={this.handleChange}/>
          </label>
          <button type="submit">Отправить</button>
        </form> */}
        

      </>
    );
  }
}
 
export default App;
