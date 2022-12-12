import React from 'react';

function Header({number, increment}) {
    console.log("Re-rendered")
    return (
        <>
        <div>Header- {number}</div>
            <button onClick={increment}> Click</button>
        </>
    );
}

export default React.memo(Header);