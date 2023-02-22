import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';
import { GuestCard, Header } from './components';



function App() {
  const { user, event, guests } = data;
  return (
    <>
      <Header />
      <main>
        <h1>
          Hello, {user.name}! You're hosting <i>{event.name}</i>
        </h1>
        <h2>
          All wishes
        </h2>
        {guests.map(guest => (<GuestCard guest={guest} />))}
      </main>
    </>
  );
}

export default App;
