


class Carrinho {
    constructor() {

        this.produtos = [];
        this.main = document.getElementById("main")
        this.cont_carrinho = document.querySelector(".carrinho > p")
    }
    async lista_cardapio() {

        const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
        const dados = await resposta.json();
        dados.pizzas.map((e) => {

            const contCaixa = document.createElement("div")
            const img = document.createElement("img")
            const logoImg = `https://pizzaria-production-299a.up.railway.app/imagem/${e.foto}`
            const div_txt = document.createElement('div')
            const p = document.createElement("p");
            const p2 = document.createElement("p");

            img.src = `${logoImg}`
            img.style.width = '12em'
            img.style.height = '12em'

            this.main.appendChild(contCaixa)
            this.main.style.display = 'flex'
            this.main.style.flexWrap = 'wrap'
            this.main.style.gap = '0.4em'
            this.main.style.padding = '0.5em'
            this.main.style.justifyContent = 'center'

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

            contCaixa.addEventListener("click", () => {
                const exixte = this.produtos.find(p => p.id === e.id);
                if (!exixte) {

                    this.produtos.push({...e,quant :1});
                    this.numeroPedidos();
                }

            });
        })
    }

    numeroPedidos() {
       
        if (this.produtos.length > 0) {
            const total = this.produtos.length;
            this.cont_carrinho.textContent = `${total}`;    
        }
    }

    vizualizarCarrinho(){
        const ver_carrinho = document.getElementById("carrinho_")
        const contCaixa_ = document.getElementById("main")
        const verCarro = document.querySelector(".verCarro")

        ver_carrinho.addEventListener('click',()=>{
            console.log(verCarro)
            contCaixa_.style.display = 'none'  
        })
    }

    soma(){
        console.log('pass')
    }
}


const p = new Carrinho()

p.lista_cardapio()
p.numeroPedidos()
p.vizualizarCarrinho()





