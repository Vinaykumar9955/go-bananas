import React from 'react';
import "./App.css"
import { CssBaseline, Container } from '@mui/material';
import UserList from './components/UserList';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <UserList />
      </Container>
    </>
  );
};

export default App;
