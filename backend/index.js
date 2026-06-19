const express = require("express")
const app = express()
const PORT = 3000

app.get("/",(req,res)=>{

    res.send("Hello mundo ! ")
} )


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
});

// roda com nodemon (npm run dev)