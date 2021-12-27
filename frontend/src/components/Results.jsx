import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { ResultsContext } from "./InputForm";

export default function Results() {
    const { results } = React.useContext(ResultsContext)

    return (
        <>
        {results.map((result, index) => 
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{result.original_term}</th>
                    <th>Distance</th>
                    <th>Score</th>
                    <th>POS Tags</th>
                </tr>
            </thead>
            <tbody>
                {result.suggestions.map((sugg, index) => (
                    <tr key={index}>
                        <td>{sugg.term}</td>
                        <td>{sugg.distance}</td>
                        <td>{sugg.score}</td>
                        <td>{sugg.tags.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        )}
        </>
    )
}
