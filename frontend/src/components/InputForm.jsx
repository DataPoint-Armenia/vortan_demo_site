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

        fetch("http://localhost:5000/suggest", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(inputDict)
        }).then(response => {
            response.json().then((x) => {
                setResults(x.suggest)
            });
        })
    }

    const style = {
        padding: "1em",
    };
    return (
        <>
            <Form style={style} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Input Term</Form.Label>
                    <Form.Control type="text" placeholder="տպրոց" onChange={handleInput.bind(this)} />
                    <Form.Text className="text-muted">
                        Only supports single words for now
                    </Form.Text>
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
