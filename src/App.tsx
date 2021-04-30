import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Todolist from './components/Todolist/TodoList';
import About from './components/About/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FunctionComponent = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Todolist />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
