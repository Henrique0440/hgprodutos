import { autolimpe } from "./Produtos_JS/p_autolimpe.js";
import { klimp } from "./Produtos_JS/p_klimp.js";
import { start } from "./Produtos_JS/p_start.js";


let p_start = document.getElementById('p_start')
let p_autolimpe = document.getElementById('p_autolimpe')
let p_klimp = document.getElementById('p_klimp')


document.addEventListener('DOMContentLoaded', function () {

    start.map((val) => {
        p_start.innerHTML += `
        <div class="formprod">
        <img class="btn_start" src="`+ val.imagem + `">
        <h1>`+ val.nome + `</h1>
        </div>`

        var infop = document.getElementsByClassName("btn_start")
        for (let i = 0; i < infop.length; i++) {
            infop[i].addEventListener("click", function () {
                if (!start[i].endereco || start[i].endereco == './product-page/') return window.alert("Pagina não disponivel, tente novamente mais tarde!")
                location.href = start[i].endereco
            })
        }
    })

    autolimpe.map((val) => {
        p_autolimpe.innerHTML += `
        <div class="formprod">
        <img class="btn_autolimpe" src="`+ val.imagem + `">
        <h1>`+ val.nome + `</h1>
        </div>`

        var infop = document.getElementsByClassName("btn_autolimpe")
        for (let i = 0; i < infop.length; i++) {
            infop[i].addEventListener("click", function () {
                if (!autolimpe[i].endereco || autolimpe[i].endereco == './product-page/') return window.alert("Pagina não disponivel, tente novamente mais tarde!")
                location.href = autolimpe[i].endereco
            })
        }
    })

    klimp.map((val) => {
        p_klimp.innerHTML += `
        <div class="formprod">
        <img class="btn_klimp" src="`+ val.imagem + `">
        <h1>`+ val.nome + `</h1>
        </div>`

        var infop = document.getElementsByClassName("btn_klimp")
        for (let i = 0; i < infop.length; i++) {
            infop[i].addEventListener("click", function () {
                if (!klimp[i].endereco || klimp[i].endereco == './product-page/') return window.alert("Pagina não disponivel, tente novamente mais tarde!")
                location.href = klimp[i].endereco
            })
        }
    })

})