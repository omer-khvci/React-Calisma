import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './style.css';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname :'Mehmet',
            phone_number : "123123"
        },{
            fullname : "Ayşe",
            phone_number :"456457"
        },{
            fullname :"Ömer",
            phone_number:"535353"
        }
]);
    useEffect(() =>{
    },[contacts]);
  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts ={contacts} />
        <Form addContact={setContacts} contacts ={contacts} />
    </div>
  )
}

export default Contacts