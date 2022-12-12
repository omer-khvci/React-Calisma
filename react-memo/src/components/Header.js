import React from 'react';

function Header({number, data}) {
    console.log("Re-rendered")
    return (
        <>
        <div>Header- {number}</div>
        <code>{JSON.stringify(data)}</code>
        </>
    );
}

export default React.memo(Header);