import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Results from "./Results"
import { ParamsContext } from "./Params";

export const ResultsContext = React.createContext({ results: []})

const InputForm = () => {
    const [input, getResults] = React.useState("")
    const [results, setResults] = React.useState([])
    const [alertVariant, setAlertVariant] = React.useState("secondary");
    const [alertText, setAlertText] = React.useState("Status");
    const { lang } = React.useContext(ParamsContext)

    const handleInput = event  => {
        event.preventDefault();
        getResults(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputDict = {
          "word": input
        }
        
        console.log(lang)
        setAlertVariant("primary")
        setAlertText("Loading...")
        fetch("https://vortan-api.herokuapp.com/suggest?lang=" + lang, {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(inputDict)
        }).then(response => {
            response.json().then((x) => {
                setResults(x.suggest)
            });
            setAlertVariant("success")
            setAlertText("Success")
        }).catch((error) => {
            console.error('Error:', error);
            setAlertVariant("danger")
            setAlertText("Error")
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Input Term</Form.Label>
                    <Form.Control type="text" placeholder="տպրոց" onChange={handleInput.bind(this)} />
                    <Form.Text className="text-muted">
                        Only supports single words for now
                    </Form.Text>
                </Form.Group>
                <Container fluid>
                    <Row >
                        <Col>
                            <Button variant="primary" type="submit" size="lg">
                                Submit
                            </Button>
                        </Col>
                        <Col>
                            <Alert variant={alertVariant}>
                                {alertText}
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </Form>
            <ResultsContext.Provider value={{results}}>
                <Results />
            </ ResultsContext.Provider>
        </div>
    );
};

export default InputForm;
