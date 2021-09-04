
    
    function simular(){
    var nome, mensal, taxa, tempo, total;

    nome = ($("#nome").val())
    mensal = Number($("#mensal").val())
    taxa = 0.03
    tempo = Number($("#tempo").val())



    total = (mensal * (1+taxa) * ((Math.pow(1+taxa,tempo)-1)/taxa)).toFixed(2);

    $(".form-notas").addClass("d-none")
    $(".mostra").removeClass("d-none")
    $(".result-value").html(total)
    $(".ola").html("Olá!" +nome)
    $(".menssagem").html(" juntando R$" +mensal)
    $(".todo").html(" todo mês você terá R$" +total) 
    $(".tempo").html(" em" +tempo) 
    $(".grana").html(" meses") 

    
    $(".description").html("juntando R$" +mensal, "todo mês, você terá R$" +total, "em" +tempo, "meses");

    //alert(total).toFixed(2);
}
function Novamente(){
    $("input").val("");
    
    $(".form-notas").removeClass("d-none")
    $(".mostra").addClass("d-none")
    $(".result-value").html("...")
}

