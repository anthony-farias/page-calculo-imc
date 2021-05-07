
function calcularIMC(peso,altura) {
    
    var inputAltura=document.getElementById("formGroupExampleInput");
    var inputPeso=document.getElementById("formGroupExampleInput2");
    var resultadoIMC=document.getElementById("resultadoIMC");
    var peso = inputPeso.value;
    var altura = inputAltura.value;
    
    var imc
    imc = (peso/(altura*altura)).toFixed(2)

    if(imc<17){
        status="Muito abaixo do peso"
    }else if(imc>17&imc<18.5){
        status="Abaixo do peso"
    }else if(imc>18.5&imc<24.9){
        status="Peso normal"
    }else if(imc>=25&imc<29.9){
        status="Acima do peso"
    }else if(imc>30&imc<34.9){
        status="Obesidade I"
    }else if(imc>34.9&imc<39.9){
        status="Obesidade II (severa)"
    }else if(imc>40){
        status="Obesidade III (mórbida)"
    }

    resultadoIMC.innerHTML=`<h3>O seu IMC atual é de: ${imc}</h3>
        <h4>A situação atual do seu peso é: ${status}</h4>
        <h4>Um IMC considerado normal esta entre 18.5 e 24.9.</h4>`
}


