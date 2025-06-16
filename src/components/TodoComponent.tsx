
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import type { RootState } from '../app/store';
import './TodoCoponent.scss';

import { addTodo, deleteTodo, updateTodo } from '../features/TodoSlice';

const TodoComponent = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (editingId !== null) {
      dispatch(updateTodo({ id: editingId, text }));
      setEditingId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText('');
  };

  const handleEdit = (id: number, currentText: string) => {
    setText(currentText);
    setEditingId(id);
  };

  return (
    <div className="todo-wrapper">
      <h3>Todo List</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter"
      />
      <button onClick={handleAddOrUpdate}>{editingId !== null ? 'Update' : 'Add'}</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
