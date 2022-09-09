function simular(){
    var nome, mensal, taxa, tempo, total;

    nome = document.getElementById("nome").value.toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
    mensal = document.getElementById("mensalidade").value;
    tempo = document.getElementById("tempo").value;
    taxa = 0.03;

    total = (mensal * (1+taxa) * ((Math.pow(1+taxa,tempo)-1)/taxa)).toFixed(2).toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
    document.getElementById("resultado").innerHTML=
    `Olá ${nome}, se você investir R$${mensal} por ${tempo} Messes, ao final você terá um total de R$${total}`
    document.getElementById("formulario").classList.add("esconder");
    document.getElementById("result").classList.remove("esconder");
}
function novamente(){
    document.getElementById("formulario").classList.remove("esconder");
    document.getElementById("result").classList.add("esconder");
}
function timer(){
    const hoje = new Date();
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();
    m = cehckTime(m);
    s = cehckTime(s);
    document.getElementById("data").innerHTML= `Agora são  ${h}:${m}:${s}`;
    setTimeout(timer, 1000);
}
function cehckTime(i){
    if(i<10){
        i ="0"+i
    }
    return i;
}