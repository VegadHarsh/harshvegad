import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Ensure JSON is parsed correctly

// Test route for checking server status
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// GET route for /send-email to avoid "Cannot GET" error in the browser
app.get("/send-email", (req, res) => {
    res.send("Use POST request to send emails.");
});

// POST route for sending email
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        console.log("Email Sent:", { name, email, message });

        // Simulate successful email sending
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Start the server on port 5000
app.listen(5000, () => console.log("Server running on port 5000"));
