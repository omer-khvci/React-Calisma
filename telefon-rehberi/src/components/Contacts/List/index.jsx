import React from 'react'
import { useState } from 'react';

function List({ contacts, removeData }) {

    const [filterText, setFilterText] = useState("");
    contacts = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    })
    const removePeople = (e) => {
        const x = e.target.getAttribute("setremovepeople");
        const index = contacts.findIndex(items => items.fullname === x)
        if(index >-1){
            contacts.splice(index, 1);
            removeData([...contacts])
        }
        

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
                    contacts.map((contacts, i) => (
                        <li key={i}>
                            <span>{contacts.fullname}
                            </span>
                            <span>
                                {contacts.phone_number}
                            </span>
                            <span
                                setremovepeople={contacts.fullname}
                                style={{ cursor: 'pointer' }}
                                onClick={removePeople}
                            >X
                            </span>
                        </li>
                    ))
                }
            </ul>
            <p>Total contacts ({contacts.length})</p>
        </div>
    )
}

export default List