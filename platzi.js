
var canvas = document.getElementById('villaplatzi');    /*  I declare which canvas I am going to work on */
var papel = canvas.getContext('2d');                    /*  I declare that the canvas type is 2 dimensions*/

var teclas = {            /*  I declare the keys of the Up, Down, Left and Right keys */
  UP: 38, 
  DOWN: 40, 
  LEFT: 37, 
  RIGHT:39
};
var fondo = {             /*  Declare the OBJECT fondo */                                   
  url: "tile.png",        /*  Declare the image direction   */
  cargaOK: false          /*  Declare the status of image load */
};
var vaca ={ 
  url: "vaca.png", 
  cargaOK: false
};
var pollo ={ 
  url: "pollo.png", 
  cargaOK: false
};
var cerdo ={ 
  url: "cerdo.png", 
  cargaOK: false
};
var cerdoMover ={ 
  url: "cerdo.png", 
  cargaOK: false
};

document.addEventListener("keyup", dibujarTeclado);  /* I indicate that every time that key is in KeyUp, call to dibujarTeclado function */
console.log(papel); 
console.log(cerdo);

//  Background variables
fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//  Cow variables
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarAnimal);
 
var cantidadVaca = aleatorio(0, 15);
var xVaca = new Array();
var yVaca = new Array();
//  Chicken variables
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarAnimal);

var cantidadPollo = aleatorio(0, 15); 
var xPollo = new Array();
var yPollo = new Array();
//  Pig variables
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarAnimal);

var cantidadCerdo = aleatorio(0, 15);
var xCerdo = new Array();
var yCerdo = new Array();
//Pig move
cerdoMover.imagen = new Image();
cerdoMover.imagen.src = cerdoMover.url;
cerdoMover.imagen.addEventListener("load", cargarAnimal);
var xMover = 200;
var yMover = 200;

function cargarFondo ()
{
  fondo.cargaOK = true;
  dibujar();
}



function cargarAnimal ()
{
  vaca.cargaOK = true;
  for( i=0; i < cantidadVaca ; i++ )
  {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    x = x * 60;
    y = y * 60;
    xVaca[i] = x;
    yVaca[i] = y;
  }
  
  pollo.cargaOK = true;
  for( i=0; i < cantidadVaca ; i++ )
  {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    x = x * 60;
    y = y * 60;
    xPollo[i] = x;
    yPollo[i] = y;
  }

  cerdo.cargaOK = true;
  for( i=0; i < cantidadVaca ; i++ )
  {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    x = x * 60;
    y = y * 60;
    xCerdo[i] = x;
    yCerdo[i] = y;
  }
  cerdoMover.cargaOK = true;
  dibujar();
}

function dibujar ()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0 , 0);
  }
  if (vaca.cargaOK )
  {
    for( i=0; i < cantidadVaca ; i++ )
    {
      papel.drawImage(vaca.imagen, xVaca[i] , yVaca[i]);
    }
  }
  if (pollo.cargaOK )
  {
    for( i=0; i < cantidadPollo ; i++ )
    {

      papel.drawImage(pollo.imagen, xPollo[i] , yPollo[i]);
    }
  }

  if (cerdo.cargaOK )
  {
    for( i=0; i < cantidadCerdo ; i++ )
    {
      papel.drawImage(cerdo.imagen, xCerdo[i] , yCerdo[i]);
    }
  }
  if (cerdoMover.cargaOK)
  {
    papel.drawImage(cerdoMover.imagen, xMover , yMover);
  }
}
//  Random function
function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min ;
  return resultado;
}

//  Draw pig with Keyboard
function dibujarTeclado(evento)
{
  var movimiento = 10;
  console.log(evento);
  switch (evento.keyCode)
  {
    case teclas.DOWN:

      yMover = yMover + movimiento;
      dibujar(xMover , yMover);
      console.log("abajo");

    break;
    case teclas.UP:

      yMover = yMover - movimiento;
      dibujar(xMover , yMover);
      console.log("arriba");

    break;
    case teclas.LEFT:

      xMover = xMover - movimiento;
      dibujar(xMover , yMover);
      console.log("izquierda");

    break;
    case teclas.RIGHT:

      xMover = xMover + movimiento;
      dibujar(xMover , yMover);
      console.log("derecha");

    break;
    default:

      console.log("Otra tecla");

    break;
  }
}