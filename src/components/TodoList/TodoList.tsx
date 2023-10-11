import { useTransition, animated } from '@react-spring/web';

import TodoListItem from './TodoListItem/TodoListItem.tsx';

import type { Todo } from '../../types/types.ts';

import './TodoList.scss';

interface Props {
  items: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ items, onToggle, onDelete }: Props) {
  const transitions = useTransition(items, {
    key: (item: Todo) => `${item.text}-${item.id}`,
    from: { opacity: 0 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 400 },
    config: { duration: 250 },
  });

  return (
    <article className="todo-list">
      {transitions((style, item) => (
        <animated.article style={style}>
          <TodoListItem
            key={`${item.text}-${item.id}`}
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        </animated.article>
      ))}
    </article>
  );
}
