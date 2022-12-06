import React from 'react'
import { useState } from 'react';

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");
    const filterContacts = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    })
    console.log("filtered ", filterContacts)
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
                        </li>
                    ))
                }
            </ul>
            <p>Total contacts ({filterContacts.length})</p>
        </div>
    )
}

export default List