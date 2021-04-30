import React, { useState } from 'react';
import EditForm from '../EditForm/EditForm';
import Confirm from '../Confirm/Confirm';

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
      <div className="comp animated">
        <label>
          <input onChange={() => props.crossHandler(props.id)} type="checkbox"/>
          <span className={props.done ? "todo done" : "todo"}>{props.title}</span>
        </label>
          <i onClick={() => deleteHandlerConfirm(props.id)} className="material-icons red-text">delete</i>&ensp;
          <i onClick={() => editHandler(props.id)} className="material-icons green-text">edit</i>&ensp;
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
