import React from "react";
import Papa from "papaparse";

const SecretSantaResults = ({ results }) => {
    const downloadCSV = () => {
        const csv = Papa.unparse(results);
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "secret_santa_results.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="results-container">
            <h2>Secret Santa Assignments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Secret Child Name</th>
                        <th>Secret Child Email</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((row, index) => (
                        <tr key={index}>
                            <td>{row.employeeName}</td>
                            <td>{row.employeeEmail}</td>
                            <td>{row.secretChildName}</td>
                            <td>{row.secretChildEmail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={downloadCSV}>Download CSV</button>
        </div>
    );
};

export default SecretSantaResults;
