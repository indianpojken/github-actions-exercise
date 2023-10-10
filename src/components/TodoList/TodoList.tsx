import TodoListItem from './TodoListItem/TodoListItem.tsx';

import type { Todo } from '../../types/types.ts';

import './TodoList.scss';

interface Props {
  items: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ items, onToggle, onDelete }: Props) {
  return (
    <article className="todo-list">
      {items.map((item) => (
        <TodoListItem
          key={`${item.text}-${item.id}`}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggle(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </article>
  );
}
