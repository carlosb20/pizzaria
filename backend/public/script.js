
const img = document.getElementById("img")
const id_p = document.getElementById("num")
const btn = document.getElementById("btn")

const app = async () => {
    const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
    const dados = await resposta.json();

    console.log(dados.refrigerantes[1]);


    const val = `

    https://pizzaria-production-299a.up.railway.app/imagem/${dados.refrigerantes[8].foto}`


    img.src = val
  

    console.log(val)

};
app()

// btn.addEventListener("click",()=>{

//     app(Number(id_p.value))

// })

