import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el cuarso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Llorar con la llona', completed: false },
]; */

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
