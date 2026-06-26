
const img = document.getElementById("img")

const app = async () => {
    const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
    const dados = await resposta.json();

<<<<<<< HEAD
    console.log(dados.refrigerantes);
=======
    console.log(dados.refrigerantes[0]);


    const val = `
    
    https://pizzaria-production-299a.up.railway.app/imagem/${dados.refrigerantes[1].foto}`

    img.src = val
  

    console.log(val)
>>>>>>> f9d836e73ddf3bbcb983b2795ac2a01329a81896
};

app();