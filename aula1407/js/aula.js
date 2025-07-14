
// Declaração de variável, constante, let;
let nome = "João";
const idade = 30;
var cidade = "São Paulo";

// Repetição

for (var i = 0; i < 10; i++){
    document.write(i+"br");
}

var contador = 1;
while (contador < 10){
    document.write(contador + "<br>");
    contador ++;
}
// Faça repete apenas uma vez.
do {
    document.write(contador + "<br>");
    contador ++;
} while (contador < 10);

// Função
function soma(a, b){
    return a + b;
}

// Função em arco. Arrow Function.
const soma = (a,b) => a+b;

// Acessar os elementos.
document.getElementById("id");
document.getElementsByTagName("h1");
document.getElementsByClassName("nomeclass");
document.querySelector(".nomeclass"); //altera o CSS;
document.querySelectorAll(".card"); //