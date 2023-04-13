let res = document.getElementById('produtos')
document.addEventListener('DOMContentLoaded', function () {
    console.log(res)
    const produtos = [
        {
            nome: "HFX 10000",
            imagem: "./Image/Produtos/AutoLimpe/hfx-10000.png",
            endereco: "./product-page/hfx-10000.html",
        },
        /*{
            nome: "HFX 4000",
            imagem: "./Image/Produtos/AutoLimpe/hfx-4000.png",
            endereco: "./product-page/",
        },*/
        {
            nome: "SX Extreme",
            imagem: "./Image/Produtos/AutoLimpe/sx-extreme.png",
            endereco: "./product-page/sx-extreme.html",
        },
        {
            nome: "Multi Clean",
            imagem: "./Image/Produtos/AutoLimpe/multi-clean.png",
            endereco: "./product-page/multi-clean.html",
        },
        {
            nome: "Toque de Limpeza",
            imagem: "./Image/Produtos/AutoLimpe/toque-de-limpeza.png",
            endereco: "./product-page/toque-de-limpeza.html",
        },
        {
            nome: "Top Tires",
            imagem: "./Image/Produtos/AutoLimpe/top-tires.png",
            endereco: "./product-page/top-tires.html",
        },
        {
            nome: "Acqua Paris",
            imagem: "./Image/Produtos/AutoLimpe/acqua-paris-gold.png",
            endereco: "./product-page/acqua-paris.html",
        },
        {
            nome: "Rose 31",
            imagem: "./Image/Produtos/AutoLimpe/rose-31.png",
            endereco: "./product-page/rose-31.html",
        },
        {
            nome: "Silicone em Gel",
            imagem: "./Image/Produtos/AutoLimpe/silicone-em-gel.png",
            endereco: "./product-page/silicone-em-gel.html",
        },
        {
            nome: "Base para Cera",
            imagem: "./Image/Produtos/AutoLimpe/base-para-cera-liquida.png",
            endereco: "./product-page/base-para-cera-liquida.html",
        },
        {
            nome: "Revit. de Plastico",
            imagem: "./Image/Produtos/AutoLimpe/revitalizador-de-plastico.png",
            endereco: "./product-page/revitalizador-de-plastico.html",
        },
        {
            nome: "Hidrat. de Couro",
            imagem: "./Image/Produtos/AutoLimpe/hidratante-de-couro.png",
            endereco: "./product-page/hidratante-de-couro.html",
        },



        {
            nome: "FX 4000",
            imagem: "./Image/Produtos/Start/fx-4000.png",
            endereco: "./product-page/fx-4000.html",
        },
        {
            nome: "FX 1100",
            imagem: "./Image/Produtos/Start/fx-1100.png",
            endereco: "./product-page/fx-1100.html",
        },
        {
            nome: "Magico",
            imagem: "./Image/Produtos/Start/magico.png",
            endereco: "./product-page/magico.html",
        },
        {
            nome: "Pedrex",
            imagem: "./Image/Produtos/Start/pedrex.png",
            endereco: "./product-page/pedrex.html",
        },
        {
            nome: "Pretita",
            imagem: "./Image/Produtos/Start/pretita-5l.png",
            endereco: "./product-page/pretita.html",
        },



        {
            nome: "Acero Talco",
            imagem: "./Image/Produtos/Klimp/acero-talco.png",
            endereco: "./product-page/acero-talco.html",
        },
        {
            nome: "Acero Lavanda",
            imagem: "./Image/Produtos/Klimp/acero-lavanda.png",
            endereco: "./product-page/acero-lavanda.html",
        },
        {
            nome: "Acero Flower",
            imagem: "./Image/Produtos/Klimp/acero-flower.png",
            endereco: "./product-page/acero-flower.html",
        },
        {
            nome: "Acero SanClean",
            imagem: "./Image/Produtos/Klimp/acero-SanClean.png",
            endereco: "./product-page/acero-sanclean.html",
        },
        {
            nome: "Acero Fresh",
            imagem: "./Image/Produtos/Klimp/acero-fresh.png",
            endereco: "./product-page/acero-fresh.html",
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
                if (!produtos[i].endereco || produtos[i].endereco == './product-page/') return window.alert("Pagina não disponivel, tente novamente mais tarde!")
                location.href = produtos[i].endereco
            })
        }
    })
})