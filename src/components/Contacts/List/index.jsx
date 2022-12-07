import React from 'react'
import { useState } from 'react';

function List({ contacts , setRemovePeople }) {

    const [filterText, setFilterText] = useState("");
    const filterContacts = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    })
    const removePeople = (e) => {
        debugger;
        const x = e.target.getAttribute("setremovepeople");
        if(contacts.length>0)
        setFilterText(setRemovePeople.filter(items => items.id !== x))
    }
    return (
        <div>
            <input
                placeholder='Filter Contact'
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul className='list'>
                {
                    filterContacts.map((contacts, i) => (
                        <li key={i}>
                            <span>{contacts.fullname}
                            </span>
                            <span>
                                {contacts.phone_number}
                            </span>
                            <span
                                setremovepeople ={contacts.id}
                                style={{ cursor: 'pointer' }}
                                onClick={removePeople}
                            >X
                            </span>
                        </li>
                    ))
                }
            </ul>
            <p>Total contacts ({filterContacts.length})</p>
        </div>
    )
}

export default List