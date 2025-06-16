
import { createSlice, type PayloadAction, } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  text: string;
  completed:boolean;
};

interface TodoState {
  todos: Todo[];
  filter:'all' | 'active' | 'completed';
}

const initialState: TodoState = {
  todos: [],
  filter:'all'
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed:false
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
  },
  
    clearTodos: (state) => {
      state.todos = [];
    },
    setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filter = action.payload;
    },
},
});

export const { addTodo, deleteTodo, updateTodo,toggleTodo,clearTodos,setFilter} = todoSlice.actions;
export default todoSlice.reducer;
