let ProdutosAutolimpe = document.getElementById('ProdutosAutolimpe')
let Vermais = document.getElementById('Vermais')
let but = false
function vermais() {

    if (but === false) {
        but = true
        Vermais.innerHTML = `
        <a href="">
        <div class="vermais" id="Vermais"><button onclick="vermais()">VER MENOS</button></div>
        </a>`

        ProdutosAutolimpe.innerHTML += `
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/base-para-cera-liquida.html">
            <img src="../Image/Produtos/AutoLimpe/base-para-cera-liquida.png" alt="">
        </a>
        <h1>BASE P/ CERA LIQUIDA</h1>
    </div>
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/hidratante-de-couro.html">
            <img src="../Image/Produtos/AutoLimpe/hidratante-de-couro.png" alt="">
        </a>
        <h1>HIDRATANTE DE COURO</h1>
    </div>
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/revitalizador-de-plastico.html">
            <img src="../Image/Produtos/AutoLimpe/revitalizador-de-plastico.png" alt="">
        </a>
        <h1>REVIT. DE PLASTICO</h1>
    </div>
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/silicone-em-gel.html">
            <img src="../Image/Produtos/AutoLimpe/silicone-em-gel.png" alt="">
        </a>
        <h1>SILICONE EM GEL</h1>
    </div>
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/acqua-paris-gold.html">
            <img src="../Image/Produtos/AutoLimpe/acqua-paris-gold.png" alt="">
        </a>
        <h1>ACQUA PARIS</h1>
    </div>
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/intense-gold.html">
            <img src="../Image/Produtos/AutoLimpe/intense-gold.png" alt="">
        </a>
        <h1>INTENSE GOLD</h1>
    </div>
    <!----------------------------------------------------------------------------------------------------------------->
    <div class="produtos">
        <a href="./AutoLimpe/rose-31.html">
            <img src="../Image/Produtos/AutoLimpe/rose-31.png" alt="">
        </a>
        <h1>ROSE 31</h1>
    </div>`
    } else {
        but = false
    }
}

/*document.addEventListener("DOMContentLoaded", function() {
    window.alert(``)
  });*/