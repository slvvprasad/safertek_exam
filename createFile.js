const http = require('http');

const postData = JSON.stringify({
  filename: 'example.txt',
  content: 'This is safertek exam test for creating a file. file created successfully !',
});

const options = {
  hostname: 'localhost',
  port: 4000,
  path: '/createFile',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(postData);
req.end();
