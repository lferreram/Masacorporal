
const IMC = function(peso,altura) {
    let resultado = 1;
    for (let inicio = 0; inicio < altura; inicio++) 
    {resultado = peso/altura*altura;}
    return resultado;};

console.log(IMC(125,1.58));
