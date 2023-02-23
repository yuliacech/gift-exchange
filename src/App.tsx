import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';
import { GuestCard, Header } from './components';
import { EuiPageTemplate } from '@elastic/eui';



function App() {
  const { user, event, guests } = data;
  return (
    <>
      <Header />
      <EuiPageTemplate
      >
        <EuiPageTemplate.Header pageTitle={event.name} description={<>Hello, {user.name}! You're hosting <i>{event.name}</i></>}
        tabs={[
          {
            label: 'All guests',
            isSelected: true,
          },
          {
            label: 'Your wishes',
          },
          {
            label: 'Your claims'
          }
        ]}/>
        <EuiPageTemplate.Section>
        {guests.map(guest => (<GuestCard guest={guest} />))}
        </EuiPageTemplate.Section>
      </EuiPageTemplate>
    </>
  );
}

export default App;
