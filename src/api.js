import axios from "axios";

const API_URL = "http://localhost:5125/api/secretsanta"; 

const uploadCSV = async (employeeFile, previousFile) => {
    debugger;
    const formData = new FormData();
    formData.append("employeesFile", employeeFile);
    if (previousFile) formData.append("previousAssignmentsFile", previousFile);

    try {
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("Full API Response:", response); 
        console.log("Extracted Data:", response.data); 

        return response.data;
    } catch (error) {
        console.error("Error uploading CSV:", error);
        throw error;
    }
};

export { uploadCSV };
