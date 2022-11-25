var checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.querySelector('.altura').setAttribute('placeholder', "Ex: 1.70")
        document.querySelector('.altura').style.marginLeft = "13px"
        document.querySelector('#alturaMetrica').innerHTML = "Altura (m):"
        document.querySelector('.botao').setAttribute('onclick', "calcularm()")
    } else {
        document.querySelector('.altura').setAttribute('placeholder', "Ex: 170")
        document.querySelector('#alturaMetrica').innerHTML = "Altura (cm):"
        document.querySelector('.altura').style.marginLeft = "-1px"
        document.querySelector('.botao').setAttribute('onclick', "calcularcm()")
    }
})

function calcularcm() {
    var peso = document.querySelector(".peso").value;
    var altura = document.querySelector(".altura").value;
    var imc = peso / ([altura * altura] / 10000);
    imc = imc.toFixed(2);
    if (imc != "Infinity") {
        if (imc != "NaN") {
            document.querySelector(".resultado").innerHTML = imc;
        } else { alert("error") }
    } else (alert("error"))
}

function calcularm() {
    var peso = document.querySelector(".peso").value;
    var altura = document.querySelector(".altura").value;
    var imc = peso / ([altura * altura]);
    imc = imc.toFixed(2);
    if (imc != "Infinity") {
        if (imc != "NaN") {
            document.querySelector(".resultado").innerHTML = imc;
        } else { alert("error") }
    } else (alert("error"))
}

