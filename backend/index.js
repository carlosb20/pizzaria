const express = require("express")
const app = express()
const PORT = 3000

const cardapio = {
  pizzas: [
    {
      id: 1,
      nome: "Calabresa",
      preco: 35.90,
    //   imagem: "/img/calabresa.jpg"
    },
    {
      id: 2,
      nome: "Mussarela",
      preco: 32.90,
    //   imagem: "/img/mussarela.jpg"
    },
    {
      id: 3,
      nome: "Portuguesa",
      preco: 39.90,
    //   imagem: "/img/portuguesa.jpg"
    },
    {
      id: 4,
      nome: "Frango com Catupiry",
      preco: 42.90,
    //   imagem: "/img/frango-catupiry.jpg"
    },
    {
      id: 5,
      nome: "Quatro Queijos",
      preco: 45.90,
    //   imagem: "/img/quatro-queijos.jpg"
    }
  ],

  refrigerantes: [
    {
      id: 1,
      nome: "Coca-Cola 350ml",
      preco: 6.00,
    //   imagem: "/img/coca-cola-350.jpg"
    },
    {
      id: 2,
      nome: "Coca-Cola 2L",
      preco: 14.00,
    //   imagem: "/img/coca-cola-2l.jpg"
    },
    {
      id: 3,
      nome: "Guaraná Antarctica 350ml",
      preco: 5.50,
    //   imagem: "/img/guarana-350.jpg"
    },
    {
      id: 4,
      nome: "Guaraná Antarctica 2L",
      preco: 13.00,
    //   imagem: "/img/guarana-2l.jpg"
    },
    {
      id: 5,
      nome: "Fanta Laranja 350ml",
      preco: 5.50,
    //   imagem: "/img/fanta-laranja.jpg"
    }
  ]
};


app.get("/",(req,res)=>{

    res.send("Hello mundo ! ")
} )


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
});

// roda com nodemon (npm run dev)