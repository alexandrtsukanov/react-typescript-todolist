import React from 'react';
import { useHistory } from 'react-router-dom';

const About: React.FunctionComponent = () => {

  const history = useHistory();

  return (
    <div className="about">
      <h1>About</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nam labore dolorum, non praesentium consequatur, velit iusto ipsa obcaecati amet distinctio commodi voluptatibus aliquam, quaerat quod eligendi recusandae necessitatibus omnis?
      </div>
      <br />
      <div>
        <button onClick={() => history.push('/')} className="btn btn-primary">Turn to todolist</button>
      </div>
    </div>
  )
}

export default About;
