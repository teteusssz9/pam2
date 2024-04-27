function consultacep()
{
    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
        let campoEndereco = document.querySelector("#logradouro")
        let campoLocalidade = document.querySelector("#localidade")
        let campoBairro = document.querySelector("#bairro")
        campoEndereco.value = objetoCEP.logradouro
        campoLocalidade.value = objetoCEP.localidade
        campoBairro.value = objetoCEP.bairro
    }
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", consultacep);