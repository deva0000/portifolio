function calcular (){
var peso = document.querySelector(".peso").value;
var altura = document.querySelector(".altura").value;
var imc = peso / ([altura * altura]/10000);
imc = imc.toFixed(2);
if(imc != "Infinity"){
    if(imc != "NaN"){
        document.querySelector(".resultado").innerHTML = imc;
    }else{alert("error")}
}else(alert("error"))
}

var checkbox = document.getElementById('toggle');

checkbox.addEventListener('change',function(){
    if(checkbox.checked){
        document.querySelector('.valueSelected').innerHTML = "Centímetros"
    }else{
        document.querySelector('.valueSelected').innerHTML = "Metros"

    }
})