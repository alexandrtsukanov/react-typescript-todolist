import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const About: React.FunctionComponent = () => {

  const history = useHistory();
  const [showOne, setShowOne] = useState<boolean>(false);

  return (
    <div className="about">
      <h1 className="animate__animated animate__fadeInDown">About</h1>
      <div className="animate__animated animate__fadeInUp">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nam labore dolorum, non praesentium consequatur, velit iusto ipsa obcaecati amet distinctio commodi voluptatibus aliquam, quaerat quod eligendi recusandae necessitatibus omnis?
      </div>
      <br />
      <div>
        <button 
          onClick={() => history.push('/')} 
          onMouseEnter={() => setShowOne(true)}
          onMouseLeave={() => setShowOne(false)}
          className="btn btn-primary animate__animated animate__fadeInUp">Back to todolist</button>
      </div>
        <br/>
      {showOne && (
        <div className="animate__animated animate__fadeIn05s">Hello! I'll be shown if mouse is hovered on me!</div>
      )}
    </div>
  )
}

export default About;
