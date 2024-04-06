The files in the repo contains server.js which contains the main implementation of the program.
To run these codes follow the steps:
step 1: create a folder in your local .
step 2: open the visual studio terminal
        command: cd foldername
step 3: run command : npm init -y
step 4: install packages :
        npm i express
        npm i body-parser
        npm i fs
        npm i mime-types
step 5: create a server.js and createFile.js files in the folder and paste those codes .
run command : node server.js

NOTE: USED 4000 as the port number because of the system permission denied. can also change to any port as required.

To run the server:  node server.js
The program conducts the following operations:
1) create a file:
    to create a file use the following command for running createFile.js file
command: node createFile.js
you change the filename and file content as per our requirements in the createFile.js.

2) get the files in the folder:
  we can get the list of files present in the respective folder at the endpoint: http://localhost:4000/getFiles

3) get the content of a file:
  we can get the content of a file using the endpoint :  http://localhost:4000/getFile?filename=example.txt
  you can replace any file name you want in the url

if the file is not present or catches some error in uploading the file . it also returns the respective error status code.

below are screenshots of the outputs generated:
get file list:
![getfiles](https://github.com/slvvprasad/safertek_exam/assets/138364981/35158379-ea40-4f11-98f2-6dc7a0917bdb)

get file content:

![getfilecontent](https://github.com/slvvprasad/safertek_exam/assets/138364981/a706a2c2-beb7-45c0-a6a1-cd2070bce95f)

