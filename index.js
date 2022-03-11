let num
function printPar(num) {
    num = prompt('Cuantos pares quieres mostrar')
    if (num !== null || num !== '' || num !== undefined) {
        for(let i = 1; i <= num * 2; i++){
            if(i % 2 === 0){
                alert(i)
            }
        }
    } else {
        alert('Debes ingresar el valor')
    }
}

do
printPar()
while(num !== 'exit')