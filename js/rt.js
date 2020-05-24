function distritoRecojo(){
	// obtener valor
	var cod = document.getElementById("recojo").value;
	// obtener texto
	var combo = document.getElementById("recojo");
	var selected = combo.options[combo.selectedIndex].text;
	
}

function distritoEntrega(){
	// obtener valor
	var cod = document.getElementById("entrega").value;
	// obtener texto
	var combo = document.getElementById("entrega");
	var selected = combo.options[combo.selectedIndex].text;
	
}

function tarifa(){

	if(document.getElementById("recojo").value == document.getElementById("entrega").value){
		alert("iguales");
	}

	if(document.getElementById("recojo").value != document.getElementById("entrega").value){
		
		if((13 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";
			//document.getElementById("txttarifa").innerHTML = "hola";
			//alert("tarifa: 30");
		}
		if((13 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((13 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((13 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((13 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";		
		}
		if((13 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((13 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((13 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "18";			
		}
		if((13 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((13 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}


	}
}

