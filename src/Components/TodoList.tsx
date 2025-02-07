import React from 'react'
import './Styles.css'
import {Todo} from '../Models'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
 

  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
};

export default TodoList;
