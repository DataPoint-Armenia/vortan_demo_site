import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import Results from "./Results"

export const ResultsContext = React.createContext({ results: []})

const InputForm = () => {
    const [input, getResults] = React.useState("")
    const [results, setResults] = React.useState([])

    const handleInput = event  => {
        getResults(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputDict = {
          "word": input
        }

        fetch("http://localhost:8000/suggest", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputDict)
        }).then(response => {
            response.json().then((x) => {
                setResults(x.data.suggest)
            });
        })
    }

    const style = {
        padding: "1em",
    };
    return (
        <>
            <Form style={style} onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Input</Form.Label>
                    <Form.Control as="textarea" placeholder="տպրոց" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ResultsContext.Provider value={{results}}>
                <Results />
            </ ResultsContext.Provider>
        </>
    );
};

export default InputForm;
