import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

import InputForm from "./InputForm"

export const ParamsContext = React.createContext({ lang: "hy"})

export default function Params() {
    const [lang, setLang] = React.useState("hy");

    const handleRadio = (event) => {
        console.log(event.target.value)
        setLang(event.target.value);
    }

    const style = {
        marginBottom: "2em",
    };
    return (
        <>
            <div style={style}>
                <Form.Label> <b> Params </b> </Form.Label>
                <div key='inline-radio' className="mb-2" onChange={handleRadio}>
                    <Form.Check inline defaultChecked
                        label="Eastern"
                        value="hy"
                        type='radio'
                        name="lang_group"
                        id={`inline-radio-1`} />
                    <Form.Check inline 
                        label="Western"
                        value="hyw"
                        type='radio'
                        name="lang_group"
                        id={`inline-radio-2`} />
                </div>
            </div>
            <ParamsContext.Provider value={{lang}}>
                <InputForm />
            </ ParamsContext.Provider>
        </>
    )
}
