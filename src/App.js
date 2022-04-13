import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoForm />
        </TodoTemplate>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
