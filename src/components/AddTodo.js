import React, { useState } from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';

let AddTodoLayout = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

let TodoInput = styled.input`
  width: 100%;
  border: none;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  flex-grow: 1;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

let AddButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default function AddTodo() {
  const { getTodoFromLocalStorage, setTodoToLocalStorage } = useLocalStorage();
  const [inputValue, setInputValue] = useState('');
  const addButtonHandler = () => {
    if (inputValue.trim() === '') {
      return;
    }
    let todoList = getTodoFromLocalStorage('todoList');
    todoList.push({ todo: inputValue, isdone: false });
    setTodoToLocalStorage('todoList', todoList);
    setInputValue('');
  };
  return (
    <AddTodoLayout>
      <TodoInput
        placeholder="할 일을 입력해주세요..."
        value={inputValue}
        onChange={(e) => {
          setInputValue((prev) => e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addButtonHandler();
          }
        }}
      />
      <AddButton>+</AddButton>
    </AddTodoLayout>
  );
}
