import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const TodoItem = ({ id, isDone, text }) => {
  const dispatch = useTodoDispatch();
  const handleToggle = () => dispatch({ type: 'TOGGLE', id });
  const handleRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckBtn isDone={isDone} onClick={handleToggle}>
        {isDone && <MdDone />}
      </CheckBtn>
      <Text isDone={isDone}>{text}</Text>
      <RemoveBtn onClick={handleRemove}>
        <MdDelete />
      </RemoveBtn>
    </TodoItemBlock>
  );
};

const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.grey1};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.red1};
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  &:hover {
    ${RemoveBtn} {
      display: initial;
    }
  }
`;

const CheckBtn = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  cursor: pointer;

  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 24px;

  ${({ isDone }) =>
    isDone &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green2};
      color: ${({ theme }) => theme.colors.green2};
    `}
`;

const Text = styled.div`
  height: 32px;
  padding-top: 4.5px;
  vertical-align: middle;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ isDone }) =>
    isDone &&
    css`
      color: ${({ theme }) => theme.colors.grey1};
    `}
`;

export default React.memo(TodoItem);
