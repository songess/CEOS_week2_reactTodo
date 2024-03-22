import styled from 'styled-components';
import DoneSection from './components/DoneSection';
import TodoCard from './components/TodoCard';
import TodoHeader from './components/TodoHeader';
import TodoSection from './components/TodoSection';

const DUMMYLOCALSTROAGETODOLIST = [
  { todo: '공부하기', isdone: false },
  { todo: '세수하기', isdone: true },
];

const DUMMYTODOLIST = DUMMYLOCALSTROAGETODOLIST.filter(
  (todo) => todo.isdone === false
);
const DUMMYDONELIST = DUMMYLOCALSTROAGETODOLIST.filter(
  (todo) => todo.isdone === true
);
console.log(DUMMYTODOLIST);
console.log(DUMMYDONELIST);

let Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efd8d8;
`;

let TodoListLayout = styled.div`
  width: 100%;
  height: 80%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

function App() {
  return (
    <Layout>
      <TodoListLayout>
        <TodoHeader />
        <TodoSection todoList={DUMMYTODOLIST} />
        <DoneSection doneList={DUMMYDONELIST} />
      </TodoListLayout>
    </Layout>
  );
}

export default App;
