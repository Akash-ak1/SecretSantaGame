import React, { useState } from "react";
import { uploadCSV } from "../api";
import { toast } from "react-toastify";

const UploadCSV = ({ setResults }) => {
    debugger
    const [employeeFile, setEmployeeFile] = useState(null);
    const [previousFile, setPreviousFile] = useState(null);

    const handleFileChange = (e, setFile) => {
        setFile(e.target.files[0]);
    };
    
    const handleUpload = async () => {
        debugger
        if (!employeeFile) {
            toast.error("Please upload the employee CSV file.");
            return;
        }
        debugger
        try {
            const response = await uploadCSV(employeeFile, previousFile);
            debugger
            setResults(response.data);
            toast.success("Secret Santa assignments generated successfully!");
        } catch (error) {
            toast.error("Error processing files. Please try again.");
        }
    };

    return (
        <div className="upload-container">
            <h2>Upload Employee List</h2>
            <input type="file" onChange={(e) => handleFileChange(e, setEmployeeFile)} />
            <h2>Upload Previous Assignments (Optional)</h2>
            <input type="file" onChange={(e) => handleFileChange(e, setPreviousFile)} />
            <button onClick={handleUpload}>Generate Assignments</button>
        </div>
    );
};

export default UploadCSV;
