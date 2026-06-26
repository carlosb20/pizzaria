const express = require("express")
const app = express()
const cardapio = require("./dados/cardapio");
const cors = require('cors');

app.use(cors());
app.use("/imagem", express.static("imagem"));
app.use(express.json());
app.use(express.static("public"));

// ver todos os itens
app.get("/api/pizzas", (req, res) => {
    res.json(cardapio);
});


const PORT = process.env.PORT || 3000;


// app.get("/pizza/:id", (req, res) => {
//     const id = Number(req.params.id);

//     const pizza = cardapio.pizzas.find(p => p.id === id);

//     if (!pizza) {
//         return res.status(404).json({
//             mensagem: "Pizza não encontrada"
//         });
//     }

//     res.json(pizza); 
// });




// app.get("/pizza/:nome", (req, res) => {
//     const nome = req.params.nome;

//     console.log("Nome recebido:", nome);

//     const pizza = cardapio.pizzas.find(
//         p => p.nome.toLowerCase() === nome.toLowerCase()
//     );

//     console.log("Pizza encontrada:", pizza);

//     res.json(pizza);
// });


// app.get("/pizza/foto/:nome", (req, res) => {
//     const nome = req.params.nome;

//     const pizza = cardapio.pizzas.find(
//         p => p.nome.toLowerCase() === nome.toLowerCase()
//     );

//     if (!pizza) {
//         return res.status(404).send("Pizza não encontrada");
//     }

//     res.sendFile(__dirname + "/img/" + pizza.foto);
// });



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
});

// roda com nodemon (npm run dev)


/*   

1. Banco de dados fake (cardápio)

const cardapio = {
  pizzas: [
    {
      id: 1,
      nome: "Calabresa",
      preco: 35.9,
      foto: "http://localhost:3000/img/malabresa.jpg"
    },
    {
      id: 2,
      nome: "Mussarela",
      preco: 32.9,
      foto: "http://localhost:3000/img/mussarela.jpg"
    }
  ]
};

export default cardapio;



2. Rotas separadas

import express from "express";
import cardapio from "../data/cardapio.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(cardapio);
});

router.get("/:nome", (req, res) => {
  const nome = req.params.nome.toLowerCase();

  const pizza = cardapio.pizzas.find(
    p => p.nome.toLowerCase() === nome
  );

  if (!pizza) {
    return res.status(404).json({ erro: "Pizza não encontrada" });
  }

  res.json(pizza);
});

export default router;



🚀 3. Servidor principal

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import pizzaRoutes from "./routes/pizzaRoutes.js";

const app = express();

// __dirname no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📸 Servir imagens
app.use("/img", express.static(path.join(__dirname, "img")));

// 🍕 Usar rotas
app.use("/pizza", pizzaRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});



*/