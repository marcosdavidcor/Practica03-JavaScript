var num=1;
var imagenVisible=0;
var imagenVisibleA=10;
var which=10;




//guardas imagenes en el array
var alea_imagen = new Array();
alea_imagen[0] = "images/foto1.jpg";
alea_imagen[1] = "images/foto2.jpg";
alea_imagen[2] = "images/foto3.jpg";
alea_imagen[3] = "images/foto4.jpg";
alea_imagen[4] = "images/foto5.jpg";
alea_imagen[5] = "images/foto6.jpg";
alea_imagen[6] = "images/foto7.jpg";
alea_imagen[7] = "images/foto8.jpg";
alea_imagen[8] = "images/foto9.jpg";
alea_imagen[9] = "images/foto10.jpg";



//----------------Funcion ramdon--------------------

function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    

    //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
    //como no son tantas, puede que alguna vez se repita 2 veces la misma
    //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
    
    
    function cambiar(){

    
            document.getElementById("ia").src = alea_imagen[rand(10)-1];
             
        
    }


    function aleatorio() {
        var azar = Math.floor(Math.random() * alea_imagen.length);
        document.getElementById("ia").src = alea_imagen[azar];
    }


//---------------------Funcion adelantar------------

    function siguiente(img)
	{
		imagenVisible++;
		if(imagenVisible>=alea_imagen.length)
		{
			imagenVisible=-1;
		}
		document.getElementById("ia").src=alea_imagen[imagenVisible];
		cargarSiguienteImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<alea_imagen.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			document.getElementById("ia").src=alea_imagen[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
    }
 
//---------------------Funcion retroceder------------
function atras(img)
	{
		imagenVisibleA--;
		if(imagenVisibleA>=alea_imagen.length)
		{
			imagenVisibleA=-1;
		}
		document.getElementById("ia").src=alea_imagen[imagenVisibleA];
		cargarAnteriorImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarAnteriorImagen()
	{
		if((imagenVisibleA+1)<alea_imagen.length)
		{
			
			var imgTmp=new Image();
			document.getElementById("ia").src=alea_imagen[imagenVisibleA-1];
		}
	}
 
	window.onload=function() {
		cargarAnteriorImagen();
    }
	
    function atras() {
		if(which>0 ){
			which--;
        document.getElementById("ia").src=alea_imagen[which];
		}
		if (document.imagenVisibleA == 1){
			document.getElementById("anterior").disabled;
		}
	
	
	}