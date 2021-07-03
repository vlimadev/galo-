//Botão ver mais

function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnleiamais=document.getElementById("btnleiamais");
    var txtresumo=document.getElementsByClassName("txt-resumo")
    

        if(pontos.style.display ==="none"){
            pontos.style.display="inline";
            maisTexto.style.display="none";
            
            btnleiamais.innerHTML="Ver mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btnleiamais.style.width="80px"
            btnleiamais.innerHTML="Ver menos";
           txtresumo.classname="txt-resumo-um";
        }
}

// mostrar conteudo oculto na div

function mostrar(elemento){
    var display = document.getElementById(elemento).style.display;
      if(display === "none"){
          document.getElementById(elemento).style.display = 'block';
      }else{
          document.getElementById(elemento).style.display = 'none';
      }    
  }

// Mostrar comentario realizado
  function comentar(){
      if (document.getElementById('coment').style.display ='none'){
      document.getElementById('coment').style.display ='block';
    }else{
        document.getElementById('coment').style.display ='none';
    }

  }
  
function menuOnClick(){

document.getElementById("barra-menu").classList.toggle("change");
document.getElementById("nav").classList.toggle("change");
document.getElementById("menu-bg").classList.toggle("change-bg");

}