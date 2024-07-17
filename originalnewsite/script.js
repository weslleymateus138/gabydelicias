var txtTitulo = 'Delicias Gaby';
var txt1 = document.getElementById("deliciasgabyh1");

var speed = 120;
var cont = 0;

function typeWriter () {
  if(cont < txtTitulo.length){
    txt1.innerHTML += txtTitulo.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }else{
    txt1.innerHTML += "<span>_</span>"
  }
}

typeWriter();