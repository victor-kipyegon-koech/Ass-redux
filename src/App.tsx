 import { useState } from 'react';
import { Provider } from 'react-redux';
import TodoComponent from './components/TodoComponent'
import { store } from './app/store'; 
import Counter from './components/counter'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <h3>Redux Counter</h3>
        <Counter />
        <hr/>
        <h3>Redux Todo</h3>
        <TodoComponent/>
      </div>
    </Provider>
  );
}

export default App;
