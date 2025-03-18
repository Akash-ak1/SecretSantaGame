import React, { useState } from "react";
import UploadCSV from "./Components/UploadCSV.js"; 
import SecretSantaResults from "./Components/SecretSantaResults.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    const [results, setResults] = useState([]);

    return (
        <div className="App">
            <h1>Secret Santa Game</h1>
            <UploadCSV setResults={setResults} />
            {results.length > 0 && <SecretSantaResults results={results} />}
            <ToastContainer />
        </div>
    );
}

export default App;
