var tablero,direccion;


const fondo = {
	imagenURL: "imagenes/fondo.png",
	imagenOK: false
};
const teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH: 39
};
const tifis = {
	x: 100,
	y: 100,
	tifisURL_FRE: "imagenes/tifis_frente.png",
	tifisURL_DE: "imagenes/tifis_der.png",
	tifisURL_IZ: "imagenes/tifis_isq.png",
	tifisURL_AR: "imagenes/tifis_esp.png",
	tifisOK_fre: false,
	tifisOK_der: false,
	tifisOK_iz: false,
	tifisOK_ar: false,
	velocidad: 10
};
const liz = {
	lizURL :"imagenes/liz.png",
	lizOK : false,
	x: 400,
	y: 200
}


function inicio ()
{
	var  canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	//fondo
	fondo.imagen = new Image(); 
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	//frente de diana
	tifis.frente = new Image(); 
	tifis.frente.src = tifis.tifisURL_FRE;
	tifis.frente.onload = confirmarFrente;
	//derecha de diana
	tifis.derecha = new Image(); 
	tifis.derecha.src = tifis.tifisURL_DE;
	tifis.derecha.onload = confirmarDerecha;
	//izquierda
	tifis.izquierda = new Image(); 
	tifis.izquierda.src = tifis.tifisURL_IZ;
	tifis.izquierda.onload = confirmarIzquierda;
	//abajo
	tifis.arriba = new Image(); 
	tifis.arriba.src = tifis.tifisURL_AR;
	tifis.arriba.onload = confirmarArriba;

	liz.lizy = new Image()
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}
function teclado (datos) 
{
	 var codigo = datos.keyCode;

	 if (codigo == teclas.UP)
	 {
	 	if (tifis.y > 0)
	 	{
	 		if (tifis.x < 140 && tifis.y < 160)
	 		{
	 			tifis.y -= tifis.velocidad;
	 		}
	 		if (tifis.x > 130 && tifis.y < 310 && tifis.x < 170)
	 		{
	 			tifis.y -= tifis.velocidad;
	 		}
	 		if (tifis.y > 250 && tifis.y < 310 && tifis.x > 160)
	 		{
	 			tifis.y -= tifis.velocidad;	
	 		}
 			if (tifis.x > 230 && tifis.y < 260)
	 		{
	 			tifis.y -= tifis.velocidad;
	 		}
	 		if (tifis.y > 250 && tifis.x < 140 && tifis.y < 310)
	 		{
	 			tifis.y -= tifis.velocidad;
	 		}
	 		if (tifis.y >= 300 && tifis.x < 120)
	 		{
	 			tifis.y -= tifis.velocidad;	
	 		}
	 		if (tifis.y > 400 && tifis.x > 110)
	 		{
	 			tifis.y -= tifis.velocidad;	
	 		}
	 	}
	 }
	 if (codigo == teclas.DOWN)
	 {
	 	if (tifis.y < 450)
	 	{
	 		if (tifis.x < 140 && tifis.y < 150)
	 		{
	 			tifis.y += tifis.velocidad;
	 		}
	 		if (tifis.x > 130 && tifis.y < 300)
	 		{
	 			tifis.y += tifis.velocidad;
	 		}
	 		if (tifis.y > 240 && tifis.x < 140 && tifis.y < 300)
	 		{
	 			tifis.y += tifis.velocidad;
	 		}
	 		if (tifis.y >= 300 && tifis.x < 120)
	 		{
	 			tifis.y += tifis.velocidad;	
	 		}
	 		if (tifis.y > 390 && tifis.x > 110)
	 		{
	 			tifis.y += tifis.velocidad;	
	 		}
	 	}
	 	
	 }
	 if (codigo == teclas.LEFT)
	 {
	 	if (tifis.x > -10)
	 	{
	 		if (tifis.x < 150 && tifis.y < 160)
	 		{
	 			tifis.x -= tifis.velocidad;
	 		}
	 		if (tifis.x > 140 && tifis.y < 310 && tifis.x < 170)
	 		{
	 			tifis.x -= tifis.velocidad;
	 		}
	 		if (tifis.y > 240 && tifis.y < 310 && tifis.x > 160)
	 		{
	 			tifis.x -= tifis.velocidad;	
	 		}
	 		if (tifis.x > 240 && tifis.y < 260)
	 		{
	 			tifis.x -= tifis.velocidad;
	 		}
	 		if (tifis.y > 240 && tifis.x < 150 && tifis.y < 310)
	 		{
	 			tifis.x -= tifis.velocidad;
	 		}
	 		if (tifis.y >300 && tifis.x < 120)
	 		{
	 			tifis.x -= tifis.velocidad;	
	 		}
	 		if (tifis.y > 390 && tifis.x > 110)
	 		{
	 			tifis.x -= tifis.velocidad;	
	 		}
	 	}
	 }
	 if (codigo == teclas.RIGTH)
	 {
	 	if (tifis.x < 460)
	 	{
	 		if (tifis.x < 140 && tifis.y < 160)
	 		{
	 			tifis.x += tifis.velocidad;
	 		}
	 		if (tifis.x > 130 && tifis.y < 310 && tifis.x < 160)
	 		{
	 			tifis.x += tifis.velocidad;
	 		}
	 		if (tifis.y > 240 && tifis.y < 310 && tifis.x > 150)
	 		{
	 			tifis.x += tifis.velocidad;	
	 		}
 			if (tifis.x > 230 && tifis.y < 260)
	 		{
	 			tifis.x += tifis.velocidad;
	 		}
	 		if (tifis.y > 240 && tifis.x < 140 && tifis.y < 310)
	 		{
	 			tifis.x += tifis.velocidad;
	 		}
	 		if (tifis.y >= 300 && tifis.x < 110)
	 		{
	 			tifis.x += tifis.velocidad;	
	 		}
	 		if (tifis.y > 390 && tifis.x > 100)
	 		{
	 			tifis.x += tifis.velocidad;	
	 		}
	 	}
	 }
	 direccion = codigo;
	 dibujar();
}
function confirmarLiz ()
{
	liz.lizOK = true;
	dibujar();
}	
function confirmarFondo ()
{
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente ()
{ 
	tifis.tifisOK_fre = true;
	dibujar();
}
function confirmarArriba ()
{ 
	tifis.tifisOK_ar = true;
	dibujar();
}
function confirmarDerecha ()
{ 
	tifis.tifisOK_der = true;
	dibujar();
}
function confirmarIzquierda ()
{ 
	tifis.tifisOK_iz = true;
	dibujar();
}

function dibujar ()
 {
	if(fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen,0,0);
	}
	var tifisdibujo = tifis.frente;
	if(tifis.tifisOK_fre & tifis.tifisOK_der & tifis.tifisOK_iz & tifis.tifisOK_ar)
	{
		if(direccion == teclas.UP)
		{
			tifisdibujo = tifis.arriba;
		}
		if(direccion == teclas.DOWN)
		{
			tifisdibujo = tifis.frente;
		}if(direccion == teclas.RIGTH)
		{
			tifisdibujo = tifis.derecha;
		}if(direccion == teclas.LEFT)
		{
			tifisdibujo = tifis.izquierda;
		}
		tablero.drawImage(tifisdibujo,tifis.x,tifis.y);
	}
	if(liz.lizOK)	
	{
		tablero.drawImage(liz.lizy,liz.x,liz.y);
	}

}
