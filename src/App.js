import styled from 'styled-components';
import TodoCard from './components/TodoCard';

const DUMMYTOOLIST = [
  { todo: '공부하기', isdone: false },
  { todo: '세수하기', isdone: true },
];

let DUMMYCONTAINERLAYOUT = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efd8d8;
`;

let TodoListLayout = styled.div`
  width: 100%;
  max-width: 840px;
  background-color: white;
`;

function App() {
  return (
    <DUMMYCONTAINERLAYOUT>
      <TodoListLayout>
        {DUMMYTOOLIST.map((todo, index) => {
          return <TodoCard key={index} todo={todo.todo} isdone={todo.isdone} />;
        })}
      </TodoListLayout>
    </DUMMYCONTAINERLAYOUT>
  );
}

export default App;
