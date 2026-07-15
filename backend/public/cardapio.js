


class Carrinho {
    constructor() {

        this.produtos = [];
        this.section = document.getElementById("cardapio-caixa")
        this.cont_carrinho = document.querySelector(".carrinho > p")
    }
    async lista_cardapio() {

        const resposta = await fetch("https://pizzaria-production-299a.up.railway.app/api/pizzas");
        const dados = await resposta.json();
        dados.pizzas.map((e) => {

            const contCaixa = document.createElement("div")
            contCaixa.setAttribute("class", 'caixa-itens')
            const img = document.createElement("img")
            const logoImg = `https://pizzaria-production-299a.up.railway.app/imagem/${e.foto}`
            const div_txt = document.createElement('div')
            div_txt.setAttribute("class", 'caixa-itens2')
            const p = document.createElement("p");
            const p2 = document.createElement("p");

            div_txt.style.width = '100px'

            img.src = `${logoImg}`
            img.style.width = '6em'
            img.style.height = '10em'

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

            contCaixa.addEventListener("click", () => {
                const exixte = this.produtos.find(p => p.id === e.id);
                if (!exixte) {

                    this.produtos.push({ ...e, quant: 1 });
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

    vizualizarCarrinho() {
        const ver_carrinho = document.getElementById("carrinho_")
        const contCaixa_ = document.getElementById("main")
         const p_c = document.getElementById("p_c")
        const verCarro = document.querySelector(".verCarro")
        const verdadosCarrinho = document.createElement("div")

        ver_carrinho.addEventListener('click', () => {
             
            if (this.section.style.display === 'none') {
                this.section.style.display = 'flex';
                verCarro.style.display = 'none';
               
                verdadosCarrinho.style.width = '150px'
                verdadosCarrinho.style.height = '150px'
                verdadosCarrinho.textContent = 'dds'
                verdadosCarrinho.style.backgroundColor = 'blue'
                
                // verCarro.appendChild(verdadosCarrinho)
                

            } else {
                this.section.style.display = 'none';
                verCarro.style.display = 'flex';
                
            }

            p_c.addEventListener('click', () => {
                this.section.style.display = 'flex';
                verCarro.style.display = 'none';
                 
                console.log('sasa')
            })
        })

        
    }

    soma() {
        console.log('pass')
    }
}


const p = new Carrinho()

p.lista_cardapio()
p.numeroPedidos()
p.vizualizarCarrinho()





