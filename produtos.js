let res = document.getElementById('produtos')
document.addEventListener('DOMContentLoaded', function () {
    console.log(res)
    const produtos = [
        {
            nome: "HFX 10000",
            imagem: "./Image/Produtos/AutoLimpe/hfx-10000.png",
            endereco: "./product-page/hfx-10000.html",
            id: "1",
        },
        {
            nome: "SX Extreme",
            imagem: "./Image/Produtos/AutoLimpe/sx-extreme.png",
            endereco: "./product-page/sx-extreme.html",
            id: "2",
        },
        {
            nome: "Multi Clean",
            imagem: "./Image/Produtos/AutoLimpe/multi-clean.png",
            endereco: "./product-page/multi-clean.html",
            id: "3",
        },
        {
            nome: "Toque de Limpeza",
            imagem: "./Image/Produtos/AutoLimpe/toque-de-limpeza.png",
            endereco: "./product-page/toque-de-limpeza.html",
            id: "4",
        },
        {
            nome: "FX 4000",
            imagem: "./Image/Produtos/Start/fx-4000.png",
            endereco: "./product-page/",
            id: "5",
        },
        {
            nome: "FX 1100",
            imagem: "./Image/Produtos/Start/fx-1100.png",
            endereco: "./product-page/",
            id: "6",
        },
        {
            nome: "Removedor Magico",
            imagem: "./Image/Produtos/Start/magico.png",
            endereco: "./product-page/",
            id: "7",
        },
        {
            nome: "Pedrex",
            imagem: "./Image/Produtos/Start/pedrex.png",
            endereco: "./product-page/",
            id: "8",
        },
        {
            nome: "Pretita",
            imagem: "./Image/Produtos/Start/pretita-5l.png",
            endereco: "./product-page/",
            id: "9",
        },
        {
            nome: "Acero Lavanda",
            imagem: "./Image/Produtos/Klimp/acero-talco.png",
            endereco: "./product-page/",
            id: "10",
        },
        {
            nome: "Acero Fresh",
            imagem: "./Image/Produtos/Klimp/acero-lavanda.png",
            endereco: "./product-page/",
            id: "11",
        },
        {
            nome: "Acero Flower",
            imagem: "./Image/Produtos/Klimp/acero-flower.png",
            endereco: "./product-page/",
            id: "12",
        },
        {
            nome: "Acero SanClean",
            imagem: "./Image/Produtos/Klimp/acero-SanClean.png",
            endereco: "",
            id: "13",
        },
    ]

    produtos.map((val) => {
        res.innerHTML += `
        <div class="formprod">
            <img src="`+ val.imagem + `">
            <h1>`+ val.nome + `</h1>
        </div>`

        let infoprod = document.getElementsByTagName('img')
        for (let i = 0; i < infoprod.length; i++) {
            infoprod[i].addEventListener("click", function () {
                if (!produtos[i].endereco) return window.alert("Pagina não disponivel, tente novamente mais tarde!")
                location.href = produtos[i].endereco
            })
        }
    })
})