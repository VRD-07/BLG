const express = require('express')
const app = express()

app.get('/api/health' , (request, response) => {
    response.json({
        status: "OK"
    });
})

const PORT = 3003;

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})