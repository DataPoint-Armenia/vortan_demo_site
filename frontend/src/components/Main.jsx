import React from "react";
import InputForm from "./InputForm"
import Header from "./Header";
import Alert from 'react-bootstrap/Alert';

const Main = () => {
    const style = {
      "margin": "1em",
      "maxWidth": "400px",
    };
    return (
        <div style={style}>
            <Header />
            <Alert variant="primary">
                The first request might take much longer than subsequent ones because it triggers
                the backend to wake up from hibernation.
            </Alert>
            <InputForm />
        </div>
    );
};

export default Main;
