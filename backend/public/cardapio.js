
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

    // 
    async pegaBebidas(valor) {
        const resposta = await fetch('https://pizzaria-fxkv.onrender.com/api/pizzas');
        const dados = await resposta.json();
        return dados[valor]
    }

    // adicionar bebida no carrinho
    async addToCartbedidas() {
        const respostas = await fetch("https://pizzaria-fxkv.onrender.com/api/pizzas");
        const dados_ = await respostas.json();
        const ca = document.querySelectorAll('.itens_bebidas')

        ca.forEach((caixa, index) => {
            caixa.addEventListener('click', () => {
                console.log('ok')
                const produto = dados_.refrigerantes[index]
                const existe = this.produtos.find(p => p.id === produto.id);

                if (!existe) {
                    this.produtos.push({ ...produto, quant: 1 });
                }
                this.numeroPedidos()
                console.log(this.produtos)
            });
        });
        
    }

        

    async getBebidas() {
        console.log('bebidas')
        const beb = await this.pegaBebidas("refrigerantes")
        // console.log(beb)
        const bebidas_ = document.createElement("div")
        bebidas_.setAttribute("class", "bebidas_")


        beb.map((cal) => {
            // console.log(cal)

            const itens_bebidas = document.createElement("div")
            itens_bebidas.setAttribute("class", "itens_bebidas")
            const logo_Img = `https://pizzaria-fxkv.onrender.com/imagem/${cal.foto}`
            const img_bebidas = document.createElement("img")
            const contbebidas = document.createElement("div")
            contbebidas.setAttribute("class", " contbebidas")

            const p_nome = document.createElement("p")
            const p_preco = document.createElement("p")
            img_bebidas.src = logo_Img

            p_nome.textContent = `${cal.nome} ${cal.mL}`
            p_preco.textContent = `preço ${cal.preco} $`

            itens_bebidas.appendChild(img_bebidas)
            contbebidas.appendChild(p_nome)
            contbebidas.appendChild(p_preco)
            itens_bebidas.appendChild(contbebidas)
            bebidas_.appendChild(itens_bebidas)

        })

        this.section.appendChild(bebidas_)

    }
    // adicionar pizza no carrinho
    async addToCart() {
        const respostas = await fetch("https://pizzaria-fxkv.onrender.com/api/pizzas");
        const dados_ = await respostas.json();
        const ca = document.querySelectorAll('.caixa-itens')

        ca.forEach((caixa, index) => {
            caixa.addEventListener('click', () => {

                const produto = dados_.pizzas[index]
                const existe = this.produtos.find(p => p.id === produto.id);

                if (!existe) {
                    this.produtos.push({ ...produto, quant: 1 });
                }
                this.numeroPedidos()
                console.log(this.produtos)
            });
        });
    }
    // adiciona quantidade de produto
    numeroPedidos() {

        if (this.produtos.length > 0) {
            const total = this.produtos.length;
            this.cont_carrinho.textContent = `${total}`;
        } else {
            const preco_totals = document.querySelector(".soma-total")
            this.cont_carrinho.textContent = '';
            this.section.style.display = 'flex';
            p_c.style.display = 'none'
            preco_totals.style.display = "none"


        }

    }

    openCard() {
        const ver_carrinho = document.getElementById("carrinho_")
        const contCaixa_ = document.getElementById("main")
        const p_c = document.getElementById("p_c")
        const verCarro = document.querySelector(".verCarro")
        const setcompra = document.querySelector(".setcompra")
        const preco_total = document.querySelector(".soma-total")

        ver_carrinho.addEventListener('click', () => {

            if (this.produtos.length > 0) {
                if (this.section.style.display === 'none') {
                    this.section.style.display = 'flex';
                    verCarro.style.display = 'none';
                    preco_total.style.display = "none"
                    console.log('dentro do if')

                } else {
                    this.section.style.display = 'none';
                    verCarro.style.display = 'flex';
                    verCarro.style.justifyContent = 'center'
                    setcompra.style.display = 'flex'
                    p_c.style.display = 'flex'
                    preco_total.style.display = "block"
                    console.log(" dentro do else")
                }

                p_c.addEventListener('click', () => {
                    this.section.style.display = 'flex';
                    verCarro.style.display = 'none';
                    preco_total.style.display = "none"
                })
            }
            this.checkPedidos()
        })
    }
    //Renderiza a interface do carrinho de compras desenhando os produtos no DOM
    checkPedidos() {

        this.produtosCarrinho.innerHTML = '';
        this.produtos.map((el) => {

            const divPedidos = document.createElement("div")
            divPedidos.setAttribute("class", "cont-pedidos")
            

            const div_logImg = document.createElement("div")
            div_logImg.setAttribute("class", "div_logImg")

            const div_cont_delete = document.createElement("div")
            div_cont_delete.setAttribute("class", "div_cont_delete")

            const imgs = `https://pizzaria-fxkv.onrender.com/imagem/${el.foto}`
            const fotoI = document.createElement('img')
            fotoI.src = imgs
            const nome_pizza = document.createElement('p')
            nome_pizza.textContent = `${el.nome}`

            const preco = document.createElement('p')
            preco.textContent = `Preço ${el.preco} $`

            // Quantidade itens
            const div_contador = document.createElement("div")
            div_contador.setAttribute("class", "div_contador")

            const img_D = document.createElement("img")
            img_D.src = "./imagem/direito.png"
            const img_E = document.createElement("img")
            img_E.src = "./imagem/esquerda.png"

            img_D.addEventListener("click", () => {
                const pizza = this.produtos.find(
                    p => p.nome === div_cont_delete.children[0].textContent
                );

                if (pizza) {
                    pizza.quant++;
                    quant.textContent = pizza.quant;
                    this.soma();
                }
            });

            img_E.addEventListener("click", () => {
                const pizza = this.produtos.find(
                    p => p.nome === div_cont_delete.children[0].textContent
                );

                if (pizza) {
                    pizza.quant--;
                    // this.numeroPedidos()
                    if (pizza.quant <= 0) {
                        this.produtos = this.produtos.filter(
                            p => p.nome !== pizza.nome

                        );

                        divPedidos.remove();
                        this.numeroPedidos()
                    } else {
                        quant.textContent = pizza.quant;
                    }
                    this.soma();
                }
                if (this.produtos.length === 0) {
                    console.log('ok')


                }
            });



            const quant = document.createElement('p')
            quant.textContent = `${el.quant}`

            div_contador.appendChild(img_E);
            div_contador.appendChild(quant)
            div_contador.appendChild(img_D);

            divPedidos.appendChild(div_logImg)
            div_logImg.appendChild(fotoI)
            div_cont_delete.appendChild(nome_pizza)
            div_cont_delete.appendChild(preco)

            div_cont_delete.appendChild(div_contador)


            // divPedidos.appendChild(div_logImg)
            // div_logImg.appendChild(fotoI)
            // div_cont_delete.appendChild(nome_pizza)
            // div_cont_delete.appendChild(preco)
            // div_cont_delete.appendChild(quant)

            divPedidos.appendChild(div_cont_delete)
            this.produtosCarrinho.appendChild(divPedidos)
        })
        this.soma()
    }

    soma() {
        const valor_total = document.querySelector(".soma-total > div > span")

        const total = this.produtos.reduce((acumulador, produto) => {
            return acumulador + Number(produto.preco * produto.quant);
        }, 0);

        valor_total.textContent = `R$ ${total.toFixed(2)}`;

    }

}


const p = new Carrinho()

p.lista_cardapio()
p.numeroPedidos()
p.openCard()
p.addToCart()

p.getBebidas()
p.addToCartbedidas()





