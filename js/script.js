function leiamais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnleiamais=document.getElementById("btnleiamais");

        if(pontos.style.display ==="none"){
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btnleiamais.innerHTML="Ver mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btnleiamais.innerHTML="Ver menos";
        }
}