import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import InputForm from "./InputForm"

export const ParamsContext = React.createContext({ lang: "hy"})

export default function Params() {
    const [lang, setLang] = React.useState("hy");
    const [mode, setMode] = React.useState("tokenize");

    const handleRadioLang = (event) => {
        setLang(event.target.value);
    }

    const handleRadioMode = (event) => {
        setMode(event.target.value);
    }

    const handleChangeLang = (val) => setLang(val);
    const handleChangeMode = (val) => setMode(val);

    const style = {
        marginBottom: "2em",
    };
    return (
        <>
            <div style={style}>
                <Form.Label> <b> Params </b> </Form.Label>
                <Container>
                <Row>
                <ToggleButtonGroup type="radio" value={lang} onChange={handleChangeLang}  name="optionsLang">
                  <ToggleButton id="tbg-btn-1" value={"hy"} variant="outline-secondary">
                    Eastern
                  </ToggleButton>
                  <ToggleButton id="tbg-btn-2" value={"hyw"} variant="outline-secondary">
                    Western
                  </ToggleButton>
                </ToggleButtonGroup>
                </Row>
                <br />
                <Row>
                <ToggleButtonGroup type="radio" value={mode} onChange={handleChangeMode}  name="optionsMode">
                  <ToggleButton id="tbg-btn-1" value={"tokenize"} variant="outline-secondary">
                    Tokens
                  </ToggleButton>
                  <ToggleButton id="tbg-btn-2" value={"phrase"} variant="outline-secondary">
                    Phrase
                  </ToggleButton>
                </ToggleButtonGroup>
                <br />
                </Row>
                </Container>
            </div>
            <ParamsContext.Provider value={{lang, mode}}>
                <InputForm />
            </ ParamsContext.Provider>
        </>
    )
}
