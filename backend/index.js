import express from "express"
const app = express()
import cardapio from "./dados/cardapio.js";
const cors = require('cors');

// app.use("/imagem", express.static("imagem"));
app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.use("/imagem", express.static("public/imagem"));
app.use(express.json());
app.use(express.static("public"));


app.get("/api/pizzas", (req, res) => {
    res.json(cardapio);
});


const PORT = process.env.PORT || 3000;

app.get("/api/pizza/nome/:nome", (req, res) => {
    const nome = req.params.nome.toLowerCase();

    const pizza = cardapio.pizzas.find(
        p => p.nome.toLowerCase() === nome
    );

    if (!pizza) {
        return res.status(404).json({ erro: "Pizza não encontrada" });
    }

    res.json(pizza);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
});

