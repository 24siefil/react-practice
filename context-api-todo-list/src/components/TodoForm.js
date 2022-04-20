import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const TodoForm = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const handleInputFormToggle = () => setIsOpened(prevIsOpened => !prevIsOpened);
  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: inputValue,
        isDone: false,
      },
    });
    setInputValue('');
    setIsOpened(false);
    nextId.current += 1;
  };

  return (
    <>
      {isOpened && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input
              autoFocus
              placeholder='할 일을 입력 후, Enter 를 누르세요.'
              onChange={handleChange}
              value={inputValue}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <InsertBtn onClick={handleInputFormToggle} isOpened={isOpened}>
        <MdAdd />
      </InsertBtn>
    </>
  );
};

const InsertBtn = styled.button`
  background: ${({ theme }) => theme.colors.green2};
  &:hover {
    background: ${({ theme }) => theme.colors.green3};
  }
  &:active {
    background: ${({ theme }) => theme.colors.green1};
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;

  position: absolute;
  left: 50%;
  margin: 0 auto;
  bottom: 0;
  transform: translate(-50%, 50%);

  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  transition: 0.125s all ease-in;
  ${({ isOpened }) =>
    isOpened &&
    css`
      background: ${({ theme }) => theme.colors.red2};
      &:hover {
        background: ${({ theme }) => theme.colors.red3};
      }
      &:active {
        background: ${({ theme }) => theme.colors.red1};
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  left: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

const InsertForm = styled.form`
  background: ${({ theme }) => theme.colors.grey3};
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey2};
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  width: 100%;
  font-size: 1.5rem;
`;

export default React.memo(TodoForm);
