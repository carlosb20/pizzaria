
class Carrinho {
    constructor() {

        this.produtos = [];
        this.section = document.getElementById("cardapio-caixa")
        this.cont_carrinho = document.querySelector(".carrinho > p")

        this.setcompra = document.querySelector(".setcompra")
        this.produtosCarrinho = document.createElement("div")
        this.produtosCarrinho.setAttribute("class", " produtosCarrinho")
        this.setcompra.appendChild(this.produtosCarrinho)
        // const inptnum = document.createEleme
    }
    async lista_cardapio() {

        const resposta = await fetch('https://pizzaria-fxkv.onrender.com/api/pizzas');
        const dados = await resposta.json();
        dados.pizzas.map((e) => {

            const contCaixa = document.createElement("div")
            contCaixa.setAttribute("class", 'caixa-itens')
            const img = document.createElement("img")
            const logoImg = `https://pizzaria-fxkv.onrender.com/imagem/${e.foto}`
            const div_txt = document.createElement('div')
            div_txt.setAttribute("class", 'caixa-itens2')
            const p = document.createElement("p");
            const p2 = document.createElement("p");

            div_txt.style.width = '100px'

            img.src = `${logoImg}`
            img.style.width = '100%'
            img.style.height = '10em'
            img.style.cursor = 'pointer'

            this.section.appendChild(contCaixa)
            this.section.style.display = 'flex'
            this.section.style.flexWrap = 'wrap'
            this.section.style.gap = '0.4em'
            this.section.style.padding = '0.5em'
            this.section.style.justifyContent = 'center'

            contCaixa.appendChild(img)
            contCaixa.style.border = '1px solid red'
            contCaixa.style.gap = '0.3em'

            contCaixa.appendChild(div_txt)
            div_txt.style.width = '12em'
            div_txt.style.height = '3em'
            div_txt.style.backgroundColor = 'silver'

            div_txt.appendChild(p);
            div_txt.style.padding = '0.2em'
            p.textContent = `Pizza ${e.nome}`

            div_txt.appendChild(p2)
            p2.textContent = `Preço ${e.preco} $`
        })

    }

    async addToCart() {
        const respostas = await fetch("https://pizzaria-fxkv.onrender.com/api/pizzas");
        const dados_ = await respostas.json();
        const ca = document.querySelectorAll('.caixa-itens')

        ca.forEach((caixa, index) => {
            caixa.addEventListener('click', () => {

                const produto = dados_.pizzas[index]
                const existe = this.produtos.find(p => p.id === produto.id);
                
                if (!existe) {
                    this.produtos.push({...produto,quant:1});
                }
               this.numeroPedidos()
               console.log(this.produtos)
            });
        });  
    }

    numeroPedidos() {

        if (this.produtos.length > 0) {
            const total = this.produtos.length;
            this.cont_carrinho.textContent = `${total}`;
        }
       
    }

    openCard() {
        const ver_carrinho = document.getElementById("carrinho_")
        const contCaixa_ = document.getElementById("main")
        const p_c = document.getElementById("p_c")
        const verCarro = document.querySelector(".verCarro")
        const setcompra = document.querySelector(".setcompra")
        // const produtosCarrinho = document.createElement("div")
        // produtosCarrinho.setAttribute("class"," produtosCarrinho")
       
        ver_carrinho.addEventListener('click', () => {
            if (this.produtos.length > 0) {
                if (this.section.style.display === 'none') {
                    this.section.style.display = 'flex';
                    verCarro.style.display = 'none';
                    console.log('dentro do if')

                } else {
                    this.section.style.display = 'none';
                    verCarro.style.display = 'flex';
                    verCarro.style.justifyContent = 'center'
                    setcompra.style.display = 'flex'
                }

                p_c.addEventListener('click', () => {
                    this.section.style.display = 'flex';
                    verCarro.style.display = 'none';
                })
            }
            this.checkPedidos()
        })
        // const inptnum = document.createElement("input")
        // inptnum.setAttribute("type", "number");
        //produtosCarrinho.appendChild(inptnum)
        //setcompra.appendChild(produtosCarrinho)
        
    }
    checkPedidos() {
      
        // const setcompra = document.querySelector(".setcompra")
        // const produtosCarrinho = document.createElement("div")
        // produtosCarrinho.setAttribute("class", " produtosCarrinho")
        // setcompra.appendChild(produtosCarrinho)
        // // const inptnum = document.createElement("input")
        // inptnum.setAttribute("type", "number")
        // produtosCarrinho.appendChild(inptnum)
        this.produtosCarrinho.innerHTML = '';
        this.produtos.map((el)=>{

            const divPedidos = document.createElement("div")
            divPedidos.setAttribute("class","cont-pedidos")

            const div_logImg = document.createElement("div")
            div_logImg.setAttribute("class","div_logImg")

            const div_cont_delete = document.createElement("div")
            div_cont_delete.setAttribute("class","div_cont_delete")
            
            const imgs = `https://pizzaria-fxkv.onrender.com/imagem/${el.foto}`
            const fotoI = document.createElement('img')
            fotoI.src = imgs
            const nome_pizza = document.createElement('p')
            nome_pizza.textContent = `${el.nome}`

            const preco = document.createElement('p')
            preco.textContent = `Preço ${el.preco} $`

            const quant = document.createElement('p')
            quant.textContent = `quant ${el.quant}`
         
            const input_cont = document.createElement("input")

            // div_cont_delete.textContent = 'ddzcscsdsdsdsdsdfds'
            // divPedidos.appendChild(text_h1)
            divPedidos.appendChild(div_logImg)
            div_logImg.appendChild(fotoI)
            //div_logImg.append(nome_pizza)
            div_cont_delete.appendChild(nome_pizza)
            div_cont_delete.appendChild(preco)
            div_cont_delete.appendChild(quant)

            //div_logImg.append(preco)
            //div_logImg.append(quant)
            divPedidos.appendChild(div_cont_delete)
            this.produtosCarrinho.appendChild(divPedidos)
        })
       
    }

    soma() {
        console.log('pass')
    }
}


const p = new Carrinho()

p.lista_cardapio()
p.numeroPedidos()
p.openCard()
p.addToCart()
//p.checkPedidos()





