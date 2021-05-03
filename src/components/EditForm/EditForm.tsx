import React, { useState } from 'react';

interface IPropsEditForm {
  title: string
  id: number
  changeTitleHandlerButton (paramId: number, paramNewTitle: string): void
}

const EditForm: React.FunctionComponent<IPropsEditForm> = (props) => {

  const [newTitle, setNewTitle] = useState<string>(props.title);

  const changeHandlerEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  }

  const keyPressHandlerEdit = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.changeTitleHandlerButton(props.id, newTitle);
    }
  }

  return (
    <div className="edit-field animate__animated animate__fadeInLeft">
      <input onKeyPress={keyPressHandlerEdit} onChange={changeHandlerEdit} value={newTitle} type="text" />&ensp;
      <button onClick={() => props.changeTitleHandlerButton(props.id, newTitle)} className="btn">Change</button>
    </div>
  )
}

export default EditForm;
