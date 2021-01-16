import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import './App.css';

import { TodoRouter } from './components/routers/TodoRouter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <TodoRouter/>
      </Provider>
    </div>
  );
}

export default App;
