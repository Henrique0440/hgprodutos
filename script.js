function inicio() {
    location.href = './index.html'
}

function produtos() {
    location.href = './produtos.html'
}

function empresa() {
    location.href = './empresa.html'
}

document.addEventListener('DOMContentLoaded', function () {

    let forma = document.getElementById('form')
    console.log(forma)
    const Produtos_Klimp = [
        {
            nome: "ACERO TALCO",
            image: "./Image/Produtos/Klimp/acero-talco.png",
            Finalidade: "Desinfecção",
            Rotulo: "",
            id: "0"
        },
        {
            nome: "ACERO LAVANDA",
            image: "./Image/Produtos/Klimp/acero-lavanda.png",
            Finalidade: "",
            Rotulo: "Desinfecção",
            id: "1"
        },
        {
            nome: "ACERO SANCLEAN",
            image: "./Image/Produtos/Klimp/acero-SanClean.png",
            Finalidade: "Desinfecção",
            Rotulo: "",
            id: "2"
        },
        {
            nome: "ACERO FLOWER",
            image: "./Image/Produtos/Klimp/acero-flower.png",
            Finalidade: "Desinfecção",
            Rotulo: "",
            id: "3"
        },
        {
            nome: "ACERO FRESH",
            image: "./Image/Produtos/Klimp/acero-fresh.png",
            Finalidade: "Desinfecção",
            Rotulo: "",
            id: "4"
        },
        {
            nome: "AROMAT. BRISA",
            image: "./Image/Produtos/Klimp/brisa.png",
            Finalidade: "Desodorizar",
            Rotulo: "",
            id: "5"
        },
        {
            nome: "AROMAT. JORLIN",
            image: "./Image/Produtos/Klimp/jorlin.png",
            Finalidade: "",
            Rotulo: "",
            id: "6"
        },
        {
            nome: "",
            image: "",
            Finalidade: "",
            Rotulo: "",
            id: "7"
        },
        {
            nome: "",
            image: "",
            Finalidade: "",
            Rotulo: "",
            id: "8"
        },
        {
            nome: "",
            image: "",
            Finalidade: "",
            Rotulo: "",
            id: "9"
        }
    ]

    Produtos_Klimp.map((val) => {
        forma.innerHTML += `
        <div class="formProd">
            <img id="`+ val.id + `" src="` + val.image + `"/>
            <h1>`+ val.nome + `</h1>
        </div>`
    })

    var infop = document.getElementsByTagName('img')
    for (let i = 0; i < infop.length; i++) {

        infop[i].addEventListener('click', function () {
            let id = this.getAttribute('id')
            Produtos_Klimp[id].nome
            forma.innerHTML = `
            <div class="formProd-2">
                <img id="voltar" src="` + Produtos_Klimp[id].image + `"/>
                <h1>`+ Produtos_Klimp[id].nome + `</h1>
                <hr>
                <h2>FINALIDADE</h2>
                <h4>`+ Produtos_Klimp[id].Finalidade + `</h4>
                <hr>
                <h2>ROTULO</h2>
                <h4>`+ Produtos_Klimp[id].Rotulo + `</h4>
            </div>`

            var voltar = document.getElementById('voltar')
            voltar.addEventListener('click', function () {
                location.href = 'produtos.html'
            })
            return false;
        })
    }
})