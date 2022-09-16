import React, { useState } from 'react';
import Header from './components/Header';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';
import './App.css';
import './index.css'
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [displayNumberOfPlayes,setDisplayNumberOfPlayes] = useState(true);
  const [showError, setShowError] = useState(false);
  const onNameChange = (name) => {
    setName(name);
  }
  const onUsernameChange = (username) => {
    setUsername(username);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(users.find((user) => user.username === username)){
      onError();
      return;
    }
    const user = {
      name,
      username,
      numOfGames:0
    }
    setUsers([user,...users]);
  } 
  const onToggle=()=>{
    setDisplayNumberOfPlayes(!displayNumberOfPlayes);
  }
  const onError = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    },2000)
  }

  return (
    <div className="App">
      {console.log(users)}
      <Header />
      <div className='body container'>
      <AddUserForm 
        name={name}
        username={username}
        onSubmit={onSubmit}
        showError={showError}
        onError={onError}
        onNameChange={onNameChange}
        onUsernameChange={onUsernameChange}
      />
      <UsersList 
        users={users}
        showNum={displayNumberOfPlayes}
        onToggle={onToggle}
        />
        </div>
    </div>
  );
}

export default App;
