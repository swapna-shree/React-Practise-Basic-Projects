import React from 'react'
import UserContextProvider from './context/userContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <div>Context API</div>
      <Login />
      <Profile /> 
     </UserContextProvider>
  )
}

export default App;