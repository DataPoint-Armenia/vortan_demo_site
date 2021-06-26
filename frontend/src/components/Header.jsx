import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const style = {
      "marginBottom": "1em",
    };
    return (
        <div style={style}>
            <Navbar bg="light">
                <Navbar.Brand>Vortan Spellcheck Demo</Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;
