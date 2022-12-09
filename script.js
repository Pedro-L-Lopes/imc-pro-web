const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const res = document.getElementById("res")

const calcular = () =>{

    if(altura.value != "" && peso.value != ""){
        const imc = (peso.value / (altura.value * altura.value).toFixed(2))
        let estado = ''
        

        if(imc <= 18.5){
            estado = "Muito Magro"
        }else if(imc > 18.5 && imc < 24.9){
            estado = "Normal"
        }else if(imc < 25 && imc < 29.9){
            estado = "Sobrepeso"
        }else if(imc < 30 && imc < 34.9){
            estado = "Obeso Grau I"
        }else if(imc < 35 && imc < 39.9){
            estado = "Obeso Grau II"
        }else if(imc > 40){
            estado = "Obeso Grau III ou Mórbido"
        }

        res.innerHTML = `IMC: ${imc.toFixed(2)} <br/> Estado: ${estado}`
    }
}