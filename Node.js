const express = require('express'); 

const app = express(); 

const port = 3000; 

  

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded 

  

app.get('/', (req, res) => { 

    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request 

}); 

  

app.post('/submit-form', (req, res) => { 

    const username = req.body.username; // access form data 

    if(!username || username.trim() === ''){ 

        return res.status(400).send('Username is required.'); 

    } 

    res.send(`Username is {username}`); 

}); 

  

app.listen(port, () => { 

    console.log(`Server running on http://localhost:${port}`); 

}); 