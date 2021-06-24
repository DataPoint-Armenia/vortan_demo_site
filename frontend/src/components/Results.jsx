import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { ResultsContext } from "./InputForm";

export default function Results() {
    const { results } = React.useContext(ResultsContext)

    const style = {
        padding: "1em",
    };

    return (
        <div style={style}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Suggest</th>
                        <th>Distance</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td>{result.term}</td>
                        <td>{result.distance}</td>
                        <td>{result.score}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}
