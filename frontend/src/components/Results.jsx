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
                        <th>Term</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                    <tr>
                        <td>{result.term}</td>
                        <td>{result.score}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}
