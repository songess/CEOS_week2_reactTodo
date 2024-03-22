import React from 'react';

export default function useLocalStorage() {
  const getTodoFromLocalStorage = (listName) => {
    return JSON.parse(localStorage.getItem(listName)) || [];
  };
  const setTodoToLocalStorage = (listName, todoList) => {
    localStorage.setItem(listName, JSON.stringify(todoList));
  };
  return { getTodoFromLocalStorage, setTodoToLocalStorage };
}
