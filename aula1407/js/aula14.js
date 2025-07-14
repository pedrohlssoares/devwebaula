const resultado = document.querySelector('#ola');
const bt = document.querySelector("#bt");

//Adicionando o evento click no botão;
bt.addEventListener("click", function(event){

    event.preventDefault();
    //Códigos vinculados ao evento
    const nome = document.querySelector("#nome");
    const qtd = document.querySelector("#qtd");

    resultado.innerHTML = "<p>Use a criatividade e crie textos: </p><p>" + nome.value + "</p>";
    resultado.classList.add('msg-principal');
    for(let i = 0; i<qtd.value; i++){
        console.log("GTI")
    }
});
