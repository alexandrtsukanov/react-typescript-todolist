import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import List from '../List/List';
import { ITodo } from '../../interfaces';

const Todolist: React.FunctionComponent = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(data);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (paramTitle: string) => {
    const newTodo: ITodo = {
      title: paramTitle,
      id: Date.now(),
      done: false,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const deleteHandler = (paramId: number) => {
    setTodos(prev => prev.filter(el => el.id !== paramId))
  }

  const crossHandler = (paramId: number) => {
    setTodos(prev => prev.map(el => el.id === paramId ? {...el, done: !el.done} : el))
  }

  const changeTitleHandler = (paramId: number, paramNewTitle: string) => {
    setTodos(prev => prev.map(el => el.id === paramId ? {...el, title: paramNewTitle} : el))
  }

  return (
    <>
      <Input 
        addHandler={addHandler}
      />
      <div className="center">
        <List 
          todos={todos}
          deleteHandler={deleteHandler}
          crossHandler={crossHandler}
          changeTitleHandler={changeTitleHandler}
        />
      </div>
    </>
  )
}

export default Todolist;
