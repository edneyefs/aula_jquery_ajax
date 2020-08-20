
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(url);
    
    
    $.ajax({
        url: "",
        type: "GET",
        success: function(response){
            console.log(response);
            $("#cep").html(response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.logradobairrouro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ibge").html(response.ibge);
            //document.getElementById("cep").innerHTML = response.cep;
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            //document.getElementById("ibge").innerHTML = response.ibge;
        }
    })
}