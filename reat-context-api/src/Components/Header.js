import React, {useContext} from 'react';
import ThemeContext from "../context/ThemeContext";

function Header() {
    const {theme , setTheme} =useContext(ThemeContext);
    return (
        <>
        <div>Active Theme : {theme}
        </div>
            <button onClick={() => setTheme(theme ==="light" ? "dark" : "light")}>Change Theme</button>
        </>
    );
}

export default Header;