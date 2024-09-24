const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist/my-angular-app/browser')));

// Route to serve files based on the request
app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'dist/my-angular-app/browser', filename);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`File not found: ${filename}`);
            res.status(404).send('File not found');
        }
    });
});

// Fallback to index.html for Angular routing (if using Angular's Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/my-angular-app/browser/index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});