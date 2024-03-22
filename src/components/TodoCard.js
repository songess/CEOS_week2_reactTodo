import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckBoxSvg } from '../assets/svg/CheckBox.svg';
import { ReactComponent as CheckBoxOutlineSvg } from '../assets/svg/CheckBoxOutline.svg';
import { ReactComponent as DeleteSvg } from '../assets/svg/Delete.svg';
import useLocalStorage from '../hooks/useLocalStorage';

let TodoCardLayout = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
    button {
      display: flex;
    }
  }
`;

let TodoCardParagraph = styled.p`
  flex-grow: 1;
`;

let TodoDeleteButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  display: none;
`;

export default function TodoCard({ isdone, todo, deleteTodo }) {
  const { getTodoFromLocalStorage, setTodoToLocalStorage } = useLocalStorage();
  const deleteHandler = () => {
    isdone
      ? setTodoToLocalStorage(
          'doneList',
          getTodoFromLocalStorage('doneList').filter(
            (item) => item.todo !== todo
          )
        )
      : setTodoToLocalStorage(
          'todoList',
          getTodoFromLocalStorage('todoList').filter(
            (item) => item.todo !== todo
          )
        );
    deleteTodo(todo);
  };
  return (
    <TodoCardLayout>
      {isdone ? <CheckBoxSvg /> : <CheckBoxOutlineSvg />}
      <TodoCardParagraph>{todo}</TodoCardParagraph>
      <TodoDeleteButton onClick={deleteHandler}>
        <DeleteSvg />
      </TodoDeleteButton>
    </TodoCardLayout>
  );
}
