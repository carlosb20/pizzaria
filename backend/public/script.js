
const img = document.getElementById("img")
const id_p = document.getElementById("num")
const itens_pizzas = document.getElementById("cardapio")

const div_itens = document.createElement("div")
div_itens.setAttribute("class","cont-pizzas")

const setPizzas = async () => {
    const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
    const dados = await resposta.json();

<<<<<<< HEAD
=======
    dados.pizzas.map((e)=>{
        const div_itens2 = document.createElement("div")
        div_itens2.style.display = 'flex'
        div_itens2.style.flexDirection = ' column'
        div_itens2.style.width = '12em'
        div_itens2.style.height = '17em'
        div_itens2.style.boxShadow = '0px 0px 10px 0px black'
        div_itens2.style.padding = '0.4em'
        div_itens2.style.alignItems = 'center'
>>>>>>> producoaCarlos

        const img_ = document.createElement("img")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")

<<<<<<< HEAD

    const val = ` https://pizzaria-production-299a.up.railway.app/imagem/${dados.refrigerantes[8].foto}`





   
    img.src = val

    console.log(val)

=======
        const div_cont = document.createElement("div")
        div_cont.style.width = '150px'
        div_cont.style.height = '50px'
        div_cont.style.tableLayout = 'center'
        const imgs = `https://pizzaria-production-299a.up.railway.app/imagem/${e.foto}`
       
        img_.src = imgs
        h2.textContent = `Pizza ${e.nome}`
        h3.textContent = `Preço ${e.preco} $`
        
        div_itens.appendChild(div_itens2)
        div_itens2.appendChild(img_)
        div_itens2.appendChild(div_cont)
        div_cont.appendChild(h2)
        div_cont.appendChild(h3)
        itens_pizzas.appendChild(div_itens)
    })
>>>>>>> producoaCarlos
};
setPizzas()

// Bebidas 
const bebidas = document.getElementById('bebidas')
const div_bebidas_cont = document.createElement('div')
div_bebidas_cont.setAttribute("class","cont-bebidas")

const setBebidas = async () =>{
    const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
    const dados = await resposta.json();
    
    // console.log(dados.refrigerantes)
    dados.refrigerantes.map((el)=>{
        const div_bebidas = document.createElement('div')
        div_bebidas.style.border = '1px solid red'
        const div_bebidasimg = document.createElement('img')
        const h2 = document.createElement('h2')


        const img_b = `https://pizzaria-production-299a.up.railway.app/imagem/${el.foto}`

        div_bebidasimg.src = img_b
        h2.textContent = `${el.nome}`


        div_bebidas.appendChild(div_bebidasimg)
        div_bebidas.appendChild(h2)
        div_bebidas_cont.appendChild(div_bebidas)
        bebidas.appendChild(div_bebidas_cont)

        console.log(el)
    })

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