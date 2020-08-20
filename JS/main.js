
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(url);
    
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //1ª forma
            $("#cep").html(response.cep);
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.logradobairrouro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP" + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
            //2ª forma
            //document.getElementById("cep").innerHTML = response.cep;
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            //document.getElementById("ibge").innerHTML = response.ibge;
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})