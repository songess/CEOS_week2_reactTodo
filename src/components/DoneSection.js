import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';

let DoneSectionLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;
let TodoListHeaderBox = styled.div`
  font-size: 0.75rem;
  padding: 0.25rem 1rem;
  font-weight: 700;
  color: #9e9e9e;
`;

export default function DoneSection({ doneList }) {
  return (
    <DoneSectionLayout>
      <TodoListHeaderBox>done</TodoListHeaderBox>
      {doneList.map((todo, index) => {
        return <TodoCard key={index} todo={todo.todo} isdone={todo.isdone} />;
      })}
    </DoneSectionLayout>
  );
}
