
const app = async () => {
    const resposta = await fetch(
        "https://pizzaria-production-299a.up.railway.app/"
    );

    const dados = await resposta.json();

    console.log(dados.pizzas);
};

app();