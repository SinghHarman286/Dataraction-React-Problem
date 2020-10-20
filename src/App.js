import React, {useState} from 'react';
import './App.css';
import LoginButton from './components/LoginButton'
import LogOutButton from './components/LogOutButton'
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {isLoading} = useAuth0();
  if(isLoading) return <div>Loading...</div>
  return (
    <>
      <LoginButton />
      <LogOutButton />
      <Profile />
    </>
  );
}

export default App;