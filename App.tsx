
import React from 'react';
import { Todo } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-gradient-to-br from-indigo-900/50 via-slate-900 to-purple-900/50 text-white antialiased overflow-x-hidden">
      <main className="container mx-auto max-w-2xl px-4 py-8">
        <Header />
        <TodoForm addTodo={addTodo} />
        <div className="space-y-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (
            <div className="text-center py-16 px-6 bg-slate-800/20 rounded-xl border border-dashed border-slate-700">
                <p className="text-xl text-slate-400">Your cosmic journey is clear.</p>
                <p className="text-slate-500 mt-2">Add a task to begin your next adventure!</p>
            </div>
          )}
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Crafted in a forgotten dimension.</p>
      </footer>
    </div>
  );
};

export default App;
