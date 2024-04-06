const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mime = require('mime-types');

const app = express();
//didnot use 8080 port due to system permission denied. so used 4000 . can also change to any different port 
const PORT = 4000;


app.use(bodyParser.json());

// printing the requested url in the console just for checking purpose
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint to create a file
app.post('/createFile', (req, res) => {
  const { filename, content } = req.body;
 
  if (!filename || !content) {
    return res.status(400).send('Filename and content are required.');
  }

  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to create file.');
    }
    res.status(200).send('File created successfully.');
  });
});

// Endpoint to get list of uploaded files
app.get('/getFiles', (req, res) => {
  fs.readdir('.', (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to retrieve files.');
    }
    res.status(200).json(files);
  });
});

// Endpoint to get file content
app.get('/getFile', (req, res) => {
  const { filename } = req.query;
 
  if (!filename) {
    return res.status(400).send('Filename is required.');
  }

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(400).send('File not found.');
    }
    res.status(200).send(data);
  });
});

//for server to listen to the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
