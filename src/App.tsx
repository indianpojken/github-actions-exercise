import { useState } from 'react';

import type { Todo } from './types/types.ts';

import TodoList from './components/TodoList/TodoList.tsx';
import AddTodoItem from './components/AddTodoItem/AddTodoItem.tsx';

export default function App() {
  const [items, setItems] = useState<Todo[]>([
    { id: 0, text: 'Get milk from the store', completed: true },
    { id: 1, text: 'Get a leash for the neighbors kid', completed: false },
  ]);

  const onToggle = (id: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const onDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addTodo = (text: string) => {
    setItems([...items, { id: items.length, text, completed: false }]);
  };

  return (
    <section className="container">
      <header>
        <h1>Aha!</h1>
      </header>

      <main>
        <TodoList onToggle={onToggle} onDelete={onDelete} items={items} />
      </main>

      <footer>
        <AddTodoItem addTodo={addTodo} />
      </footer>
    </section>
  );
}
