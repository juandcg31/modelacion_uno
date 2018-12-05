
var semillaoriginal;
$('#btGeneral').click( function (){
  if (!($("#txtSemilla").val() == '')){
  	if (!($("#txtCantidad").val() === undefined || $('#txtCantidad').val() === null)){
        if (parseInt($('#txtCantidad').val())>0){
            cuadradosMedios();
		}else{
        	alert('ingrese una cantidad valida');
		}
	}else{
  		alert("La cantidad no puede ser vacia");
	}
  }else{
  	 alert("La semilla no puede ser vacia");
  }
});

$('#btGeneral1').click( function (){
    if (!($("#txtSemillaUno").val() == '')){
        if (!($("#txtSemillaDos").val() == '')){
            if (!($("#txtCantidad").val() === undefined || $('#txtCantidad').val() === null)){
                if (parseInt($('#txtCantidad').val())>0){
                    productoMedios();
                }else{
                    alert('ingrese una cantidad valida');
                }
            }else{
                alert("La cantidad no puede ser vacia");
            }
        }else{
            alert("La semilla 2 no puede ser vacia");
        }
    }else{
        alert("La semilla 1 no puede ser vacia");
    }
});

$('#btGeneral2').click( function (){
    if (!($("#txtSemilla").val() == '')){
        if (!($("#txtConstante").val() == '')){
            if (!($("#txtCantidad").val() === undefined || $('#txtCantidad').val() === null)){
                if (parseInt($('#txtCantidad').val())>0){
                    multiplicadorConstante();
                }else{
                    alert('ingrese una cantidad valida');
                }
            }else{
                alert("La cantidad no puede ser vacia");
            }
        }else{
            alert("La constante no puede ser vacia");
        }
    }else{
        alert("La semilla no puede ser vacia");
    }
});


function calcularTamano(semilla){
	var tamano = 0;
	var aux = semilla;
	while(aux != 0){
		tamano++;
		aux = parseInt(aux/10);
	}
	return tamano;
}
function calcularSemilla( newsemilla){
	console.log("La semilla Original es:"+semillaoriginal);
	var tamano = calcularTamano(newsemilla);
	if(tamano%2 == 0){
		if(tamano != calcularTamano(semillaoriginal)){
			while(tamano != calcularTamano(semillaoriginal)&& tamano > calcularTamano(semillaoriginal)){
				if(tamano%2 !=0) {
					newsemilla = (newsemilla)/10;
					tamano = tamano-1;
				}else{
					var divisor = 1;
					for(var i = 1;i < tamano; i++){
						divisor = divisor*10;
					}
					newsemilla = (newsemilla%divisor)/10;
					tamano = calcularTamano(newsemilla);
				}
			}
		}
	}else{
		while(tamano != calcularTamano(semillaoriginal) && tamano > calcularTamano(semillaoriginal)){
			if(tamano%2 !=0){
				newsemilla = (newsemilla)/10;
				tamano = tamano-1;
			}else{
				var divisor = 1;
				for(var i = 1;i < tamano; i++){
					divisor = divisor*10;
				}
				newsemilla = (newsemilla%divisor)/10;
				tamano = calcularTamano(newsemilla);
			}
		}
	}
	return parseInt(newsemilla);
}
function validar(semilla){
	var tamano = calcularTamano(semilla);
	if(tamano > 3){
		var divisor = 1;
		for(var i = 1;i < tamano; i++){
			divisor = divisor*10;
		}
		if(parseInt((semilla%divisor)/10)==0){
			alert("La semilla ingresada no es apta para el calculo");
			return false;
		}
	}else{
		alert("La semilla debe de tener mas de 3 digitos");
		return false;
	}
	return true;
}
function cuadradosMedios(){
	var semilla, cantidad = 0;

  if(validar( parseInt($('#txtSemilla').val()))){
    semillaoriginal = semilla = parseInt($('#txtSemilla').val());
  }
  else{
    return;
  }
	if(parseInt($('#txtCantidad').val())>0){
		cantidad= $('#txtCantidad').val();
	}
    $('#tabla1 tbody').empty();
    var fila='<tr>';
	for(var i=0;i < cantidad; i++){
		fila += "<td>Y" +i+ "=(" +semilla +")^2 = "+semilla*semilla+"</td>";
		semilla = calcularSemilla(semilla*semilla);
		if (semilla == 0){
		    i = cantidad;
        }
		if(calcularTamano(semilla) == calcularTamano(semillaoriginal)){
			fila += "<td> X" +i+1+ "= "+semilla+"</td>";
		}else{
			fila += "<td>X"+(i+1)+"= 0"+semilla+"</td>";
		}
		var divisor = 1;
		for(var j = 0;j < calcularTamano(semilla); j++){
			divisor = divisor*10;
		}
			fila += "<td>r"+(i+1)+"= "+(semilla/divisor)+"</td></tr>";

		$('#tabla1 tbody').append(fila);
		fila = "<tr>"
	}

}
function productoMedios(){
	var semilla1 = 0, semilla2, cantidad = 0;
  if(validar(parseInt($('#txtSemillaUno').val()))){
    	semillaoriginal = semilla2 = $('#txtSemillaUno').val();
  }
  else{
    return;
  }
  if(validar(parseInt($('#txtSemillaDos').val()))){
    	semilla1 = $('#txtSemillaDos').val();
  }
  else{
    return;
  }
	if(parseInt($('#txtCantidad').val())>0){
		cantidad= $('#txtCantidad').val();
	}
  else {
    return;
  }
    $('#tabla1 tbody').empty();
    var fila='<tr>';
	for(var i=0;i < cantidad; i++){
	    fila += "<td>Y"+i+"=("+semilla2+")"+"("+semilla1+")"+" = "+semilla2*semilla1+"</td>";
        var aux = semilla1;
		semilla1 = calcularSemilla(semilla2*semilla1);
		semilla2 = aux;
        if (semilla1 == 0){
            i = cantidad;
        }
        if(calcularTamano(semilla1) == calcularTamano(semillaoriginal)){
            fila += "<td>X"+(i+1)+"= "+semilla1+"</td>";
		}else{
            fila += "<td>X"+(i+1)+"= 0"+semilla1+"</td>";
		}
		var divisor = 1;
		for(var j = 0;j < calcularTamano(semilla1); j++){
			divisor = divisor*10;
		}
        fila += "<td>r"+(i+1)+"= "+(semilla1/divisor)+"</td></tr>";

        $('#tabla1 tbody').append(fila);
        fila = "<tr>"
	}

}
function multiplicadorConstante(){
	var constante, semilla, cantidad = 0;
  if(validar(parseInt($('#txtSemilla').val()))){
    	semillaoriginal = semilla = $('#txtSemilla').val();
  }
  else{
    return;
  }
  if(validar(parseInt($('#txtConstante').val()))){
    constante = $('#txtConstante').val();
  }
  else{
    return;
  }
	if(parseInt($('#txtCantidad').val())>0){
		cantidad=$('#txtCantidad').val();
	}
  else {
    return;
  }

    $('#tabla1 tbody').empty();
    var fila='<tr>';
	for(var i=0;i < cantidad; i++){
	   fila += "<td>Y"+i+"=("+constante+")"+"("+semilla+")"+" = "+semilla*constante+"</td>";

		semilla = calcularSemilla(semilla*constante);
        if (semilla == 0){
            i = cantidad;
        }
        if(calcularTamano(semilla) == calcularTamano(semillaoriginal)){
            fila += "<td>X"+(i+1)+"= "+semilla+"</td>";
		}else{
            fila += "<td>X"+(i+1)+"= 0"+semilla+"</td>";
        }
		var divisor = 1;
		for(var j = 0;j < calcularTamano(semilla); j++){
			divisor = divisor*10;
		}
        fila += "<td>r"+(i+1)+"= 0,0"+(semilla/divisor)+"</td></tr>";


        $('#tabla1 tbody').append(fila);
        fila = "<tr>"
  }
}
