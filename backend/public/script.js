
const app = async () => {
    const resposta = await fetch(
        "https://pizzaria-production-299a.up.railway.app/api/pizzas"
       
    );

    const dados = await resposta.json();

    console.log(dados.refrigerantes);
};

app();