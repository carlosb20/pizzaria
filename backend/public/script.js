
const img = document.getElementById("img")
const id_p = document.getElementById("num")
const itens_pizzas = document.getElementById("cardapio")

const div_itens = document.createElement("div")
div_itens.setAttribute("class","cont-pizzas")

const setPizzas = async () => {
    const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
    const dados = await resposta.json();

    dados.pizzas.map((e)=>{
        const div_itens2 = document.createElement("div")

        div_itens2.setAttribute('class','div_itens2')
    
        const img_ = document.createElement("img")
        img_.style.width = '100%'
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const div_cont = document.createElement("div")
        div_cont.style.width = '100%'
        div_cont.style.height = '80px'
        div_cont.style.tableLayout = 'center'
        const imgs = `https://pizzaria-production-299a.up.railway.app/imagem/${e.foto}`
       
        img_.src = imgs
        h2.textContent = `Pizza ${e.nome}`
        h3.textContent = `Preço ${e.preco} $`
        h3.style.fontSize = '0.9em'
       
        
        div_itens.appendChild(div_itens2)
        div_itens2.appendChild(img_)
        div_itens2.appendChild(div_cont)
        div_cont.appendChild(h2)
        div_cont.appendChild(h3)
        itens_pizzas.appendChild(div_itens)
    })

};
setPizzas()

// Bebidas 
const bebidas = document.getElementById('bebidas')
const div_bebidas_cont = document.createElement('div')
div_bebidas_cont.setAttribute("class","cont-bebidas")

const setBebidas = async () =>{
    const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
    const dados = await resposta.json();
    
    console.log(dados.refrigerantes)
    dados.refrigerantes.map((el)=>{
        const div_bebidas = document.createElement('div')
        div_bebidas.setAttribute("class","div_bebidas")
        const div_bebidasimg = document.createElement('img')
        const p_nome = document.createElement('p')
        const p_preco = document.createElement("p")
        const p_ml = document.createElement("p")
      


        const img_b = `https://pizzaria-production-299a.up.railway.app/imagem/${el.foto}`

        div_bebidasimg.src = img_b
        p_nome.textContent = `${el.nome}`
        p_preco.textContent =`Preço:${el.preco} $`
        p_ml.textContent = `${el.mL}`


        div_bebidas.appendChild(div_bebidasimg)
        div_bebidas.appendChild(p_nome)
        div_bebidas.appendChild(p_preco)
        div_bebidas.appendChild(p_ml)
        div_bebidas_cont.appendChild(div_bebidas)
       

        // console.log(el)
    })
    bebidas.appendChild(div_bebidas_cont)
}

setBebidas()
//  Bebidas por nome

const itensNome = async (nome) => {
    const resposta = await fetch(
        `https://pizzaria-production-299a.up.railway.app/api/pizza/nome/${nome}`
    );

    const dados = await resposta.json();

    console.log(dados);
    return dados;
};



const btn_menu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

btn_menu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    console.log('ok')
});