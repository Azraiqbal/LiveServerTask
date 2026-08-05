const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Form data ko read karne ke liye
app.use(express.urlencoded({ extended: true }));

// public folder ki files serve karega
app.use(express.static("public"));

// Form submit hone par
app.post("/submit", (req, res) => {
    const message = req.body.message + "\n";

    fs.appendFile("data.txt", message, (err) => {
        if (err) {
            return res.send("Error saving data!");
        }

        res.send("Data Saved Successfully!");
    });
});

// Server start
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
