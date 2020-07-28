import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
          <Route exact path='/'><Chat /></Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
