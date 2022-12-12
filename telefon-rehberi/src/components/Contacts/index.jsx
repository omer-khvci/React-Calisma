import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './style.css';

function Contacts() {
    const [contacts, setContacts] = useState([
        
    ]);

    useEffect(() =>{
    },[contacts]);
  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts ={contacts}  removeData ={setContacts}/>
        <Form addContact={setContacts} contacts ={contacts} />
    </div>
  )
}

export default Contacts