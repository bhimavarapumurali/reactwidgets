import React, { useState } from 'react';
import { CheckSquare, Plus, X } from 'lucide-react';

export function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <CheckSquare className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="font-semibold">Todo List</h3>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          placeholder="Add new todo"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="text-red-500 hover:text-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}