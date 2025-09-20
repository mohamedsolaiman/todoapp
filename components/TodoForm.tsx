
import React, { useState } from 'react';
import { PlusIcon } from './icons/PlusIcon';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What new reality will you create?"
        className="flex-grow bg-slate-800/50 text-slate-100 border-2 border-fuchsia-500/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 rounded-lg px-4 py-3 transition-all duration-300 placeholder:text-slate-400 outline-none"
      />
      <button
        type="submit"
        aria-label="Add new task"
        className="bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white font-bold p-3 rounded-lg flex items-center justify-center hover:from-fuchsia-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-fuchsia-600/30 hover:shadow-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white"
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

export default TodoForm;
