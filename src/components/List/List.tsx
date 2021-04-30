import React from 'react';
import Todo from '../Todo/Todo';
import { ITodo } from '../../interfaces';

interface IPropsList {
  todos: ITodo[]
  deleteHandler (paramId: number): void
  crossHandler (paramId: number): void
  changeTitleHandler (paramId: number, paramNewTitle: string): void
}

const List: React.FunctionComponent<IPropsList> = (props) => {

  return (
    <ul className="list center">
      {!props.todos.length && (
        <p className="center">List of items is empty</p>
      )}
      {props.todos.map(({ title, id, done }) => (
          <Todo 
            key={id}
            title={title}
            id={id}
            done={done}
            deleteHandler={props.deleteHandler}
            crossHandler={props.crossHandler}
            changeTitleHandler={props.changeTitleHandler}
          />
      ))}
    </ul>
  )
}

export default List;
