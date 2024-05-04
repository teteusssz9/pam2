function lerclientes() 
{
    let requisicao = new XMLHttpRequest();
    let url = "https://etec.fernandograciano.com.br/listarclientes.php";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let corpotabela = document.querySelector("#corpotabela")
        let dados = json.parse(this.response)
        dados.forEach(function(valor,chave)
        {
            let novalinha = document.createElement("tr")
            let celulaNome = document.createElement("td")
            let celulaCelular = document.createElement("td")
            celulaNome.innerHTML = valor.celulanome
            celulaCelular.innerHTML = valor.celulacelular
            novalinha.append(celulaNome)
            novalinha.append(celulaCelular)
            corpotabela.append(novalinha)
        });
        console.log(this.response)
    }
};
