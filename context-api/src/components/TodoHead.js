import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHead = () => {
  const todos = useTodoState();
  const todoCnt = todos.filter((todo) => !todo.isDone);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <h2 className='day'>{dayName}</h2>
      <h2 className='todo-cnt'>할 일 {todoCnt.length}개 남음</h2>
    </TodoHeadBlock>
  );
};

const TodoHeadBlock = styled.div`
  padding: 48px 32px 10px 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  h1 {
    margin: 0;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.head};
  }
  .day {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
  }
  .todo-cnt {
    color: ${({ theme }) => theme.colors.green1};
    font-size: 1.5rem;
    margin-top: 30px;
  }
`;

export default TodoHead;
