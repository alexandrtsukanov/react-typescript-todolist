import React, { useState } from 'react';

interface IPropsInput {
  addHandler (paramTitle: string): void
}

const Input: React.FunctionComponent<IPropsInput> = (props) => {

  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.addHandler(title);
      setTitle('');
    }
  }

  const addHandlerButton = () => {
    props.addHandler(title);
    setTitle('');
  }

  return (
    <div className="input-field mt-2 ml-12 mr-12 animate__fade">
      <input onKeyPress={keyPressHandler} onChange={changeHandler} value={title} type="text" id="title" />
      <label htmlFor="title" className="active">New todo</label>&ensp;
      <button onClick={addHandlerButton} className="btn">Add</button>
    </div>
  )
}

export default Input;
