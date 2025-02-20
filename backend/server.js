require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());  // Parse JSON bodies
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Retrieve the OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Define the route to generate the Mermaid flowchart
app.post('/generate-flowchart', async (req, res) => {
    try {
        const { scenario } = req.body;  // Get the scenario from the request body
        
        // Make a request to the OpenAI API to generate the flowchart
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",  // OpenAI API endpoint
            {
                model: "gpt-3.5-turbo",  //Use GPT-4 model
                messages: [
                    { role: "system", content: "Generate a mermaid flowchart based on the given website scenario." },
                    { role: "user", content: scenario }  // Pass the scenario to the API
                ],
            },
            {
                headers: {
                    "Authorization": `Bearer ${OPENAI_API_KEY}`,  // Pass the API key in the header
                    "Content-Type": "application/json",  // Set the content type to JSON
                }
            }
        );

        // Extract the Mermaid flowchart code from the response
        const mermaidCode = response.data.choices[0].message.content;
        
        // Return the Mermaid code to the frontend
        res.json({ mermaidCode });
    } catch (error) {
        console.error("Error generating flowchart:", error);
        res.status(500).send("Error generating flowchart");  // Handle errors
    }
});

// Start the server on a specified port (default to 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
