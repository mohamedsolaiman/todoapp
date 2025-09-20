
import React from 'react';
import { Todo } from '../types';
import { TrashIcon } from './icons/TrashIcon';
import { CheckIcon } from './icons/CheckIcon';
import { CircleIcon } from './icons/CircleIcon';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/20">
      <button
        onClick={handleToggle}
        className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
          todo.completed
            ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
            : 'bg-slate-700 text-slate-400 hover:bg-cyan-500 hover:text-white'
        }`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? <CheckIcon className="w-5 h-5" /> : <CircleIcon className="w-5 h-5" />}
      </button>
      <span className={`flex-grow text-lg transition-all duration-300 ${todo.completed ? 'line-through text-slate-500' : 'text-slate-100'}`}>
        {todo.text}
      </span>
      <button
        onClick={handleDelete}
        className="text-slate-500 hover:text-pink-500 transition-all duration-300 p-2 rounded-full hover:bg-pink-500/10"
        aria-label="Delete task"
      >
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoItem;
