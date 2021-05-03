import React, { useState } from 'react';
import EditForm from '../EditForm/EditForm';
import Confirm from '../Confirm/Confirm';
import './Todo.css'

interface IPropsTodo {
  key: number
  title: string
  id: number
  done: boolean
  deleteHandler (paramId: number): void
  crossHandler (paramId: number): void
  changeTitleHandler (paramId: number, paramNewTitle: string): void
}

const Todo: React.FunctionComponent<IPropsTodo> = (props) => {

  const [elemToEdit, setElemToEdit] = useState<(number | null)>(null);
  const [elemToDelete, setElemToDelete] = useState<(number | null)>(null);
  const [deleteIconHover, setDeleteIconHover] = useState<boolean>(false);
  const [editIconHover, setEditIconHover] = useState<boolean>(false);

  const editHandler = (paramId: number) => {
    if (!elemToEdit) {
      setElemToEdit(paramId);
    } else {
      setElemToEdit(null);
    }
  }

  const deleteHandlerConfirm = (paramId: number) => {
    if (!elemToDelete) {
      setElemToDelete(paramId);
    } else {
      setElemToDelete(null);
    }
  }

  const changeTitleHandlerButton = (paramId: number, paramNewTitle: string) => {
    props.changeTitleHandler(paramId, paramNewTitle);
    setElemToEdit(null);
  }

  const deleteConfirmButton = (paramId: number) => {
    props.deleteHandler(paramId);
    setElemToDelete(null);
  }

  const deleteNo = () => {
    setElemToDelete(null);
  }

  return (
    
    <div className="center">
      <div className="comp animate__animated animate__fadeIn">
        <label>
          <input onChange={() => props.crossHandler(props.id)} type="checkbox"/>
          <span className="todo" style={{textDecoration: props.done ? 'line-through' : 'none'}}>{props.title}</span>
        </label>
          <i onClick={() => deleteHandlerConfirm(props.id)} 
            onMouseEnter={() => setDeleteIconHover(true)} 
            onMouseLeave={() => setDeleteIconHover(false)} 
            className="material-icons" style={{color: deleteIconHover ? 'darkred' : 'red'}}>delete</i>&ensp;
          <i onClick={() => editHandler(props.id)} 
            onMouseEnter={() => setEditIconHover(true)} 
            onMouseLeave={() => setEditIconHover(false)}
            className="material-icons" style={{color: editIconHover ? 'darkgreen' : 'green'}}>edit</i>&ensp;
      </div>

      {elemToEdit ?
      <EditForm 
        title={props.title}
        id={props.id}
        changeTitleHandlerButton={changeTitleHandlerButton}
      /> :
      null}

      {elemToDelete ?
      <Confirm 
        id={props.id}
        deleteConfirmButton={deleteConfirmButton}
        deleteNo={deleteNo}
      /> :
      null}
    </div>

  )
}

export default Todo;
