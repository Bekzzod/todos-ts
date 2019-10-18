import React from 'react'

interface IMyObject {
  _id: string;
  todoName: string,
  todoDone: boolean,
}

interface IState {
  todo: string;
  todos: IMyObject[];
}

class Todos extends React.Component<{}, IState> {
  public state: IState = {
    todo: '',
    todos: [],
  };

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(responce => responce.json())
      .then(todos => {
        this.setState({
          todos
        })
      })
  }
 
  // public handleEnter = (event: React.KeyboardEvent) => {
  //   console.log(event.key)

  //   if (event.key === 'Enter') {
  //     const arr = this.state.todos.slice();
  //     arr.push(this.state.todo);

  //     this.setState({
  //       todo: '',
  //       todos: arr,
  //     })
  //   }
  // }

  // public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const { value } = event.currentTarget
  //   this.setState({
  //     todo: value,
  //   })

  // }
  
  public render() {
    let res:any;

    if (this.state.todos.length > 0 ) {
      const arr = this.state.todos.slice()
      res = arr.map(item => {
        return (
          <div className='todoItem'>
            <p>{item.todoName}</p>
            <div className='close'>X</div>
          </div>
        )
      })
    }

    return (
      <div className='todosContainer'>
        <input
          type='text'
          name='todo'
          value={this.state.todo}
          placeholder='What needs to be done?'
          // onChange={this.handleChange}
          // onKeyPress={this.handleEnter}
        />
        {res}
      </div>
    )
  }
}

export default Todos