import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import DoneSection from './components/DoneSection';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoSection from './components/TodoSection';
import useLocalStorage from './hooks/useLocalStorage';

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
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const { getTodoFromLocalStorage, setTodoToLocalStorage } = useLocalStorage();
  useEffect(() => {
    setTodoList(getTodoFromLocalStorage('todoList'));
    setDoneList(getTodoFromLocalStorage('doneList'));
  }, []);
  const addTodo = (todo) => {
    setTodoList((prev) => {
      return [...prev, todo];
    });
    // setTodoToLocalStorage('todoList', todoList);2
  };
  const deleteTodo = (todo) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.todo !== todo);
    });
  };
  return (
    <Layout>
      <TodoListLayout>
        <TodoHeader />
        <TodoSection todoList={todoList} deleteTodo={deleteTodo}/>
        <DoneSection doneList={doneList} deleteTodo={deleteTodo}/>
        <AddTodo addTodo={addTodo} />
        <TodoFooter
          todoDoneCount={doneList.length}
          todoTotalCount={doneList.length + todoList.length}
        />
      </TodoListLayout>
    </Layout>
  );
}

export default App;
