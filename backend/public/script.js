
const app = async() => {

    const val = await fetch("http://localhost:3000")
    const dados = await val.json()

    console.log(dados)
    
}

app()