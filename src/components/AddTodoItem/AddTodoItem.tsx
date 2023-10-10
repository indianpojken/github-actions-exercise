import { useState } from 'react';

import './AddTodoItem.scss';

interface Props {
  addTodo: (text: string) => void;
}

export default function AddTodoItem({ addTodo }: Props) {
  const [text, setText] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className="add-todo-item" onSubmit={onSubmit}>
      <input
        className="add-todo-item__set-text"
        value={text}
        placeholder="Add a new task"
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <button type="submit">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2 0L10.8 0V10.8001H0L0 13.2001H10.8L10.8 24H13.2L13.2 13.2001L24 13.2001V10.8001L13.2 10.8001V0Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
}
