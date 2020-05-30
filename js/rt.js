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
		//breña
		if((1 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((1 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((1 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((1 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((1 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((1 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((1 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "23";			
		}
		if((1 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "23";			
		}
		if((1 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((1 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((1 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((1 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "27";			
		}
		if((1 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		//cercado lima
		if((2 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((2 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((2 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((2 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((2 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((2 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((2 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((2 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((2 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((2 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((2 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((2 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((2 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		//comas
		if((3 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((3 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((3 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((3 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((3 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((3 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((3 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((3 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((3 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		//jesus maria
		if((4 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "18";			
		}
		if((4 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((4 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((4 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((4 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((4 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((4 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((4 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((4 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((4 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((4 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((4 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((4 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}		
		//la molina
		if((5 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((5 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		if((5 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((5 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((5 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((5 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((5 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((5 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		//lince
		if((6 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((6 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((6 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((6 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((6 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((6 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((6 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((6 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((6 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((6 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((6 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((6 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((6 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		//los olivos
		if((7 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((7 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((7 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((7 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((7 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((7 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}		
		if((7 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((7 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((7 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((7 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((7 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((7 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((7 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		//miraflores
		if((8 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((8 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((8 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		if((8 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((8 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}		
		if((8 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((8 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((8 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		//san borja
		if((9 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((9 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((9 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((9 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((9 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((9 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((9 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((9 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		//san isidro
		if((10 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "18";			
		}
		if((10 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((10 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((10 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((10 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((10 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((10 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((10 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((10 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		//sjm
		if((11 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((11 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((11 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((11 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((11 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((11 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((11 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((11 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((11 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((11 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((11 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((11 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((11 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		//smp
		if((12 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((12 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((12 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((12 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((12 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((12 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((12 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}		
		if((12 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "38";			
		}
		if((12 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		//surco
		if((13 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";		
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
		if((13 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		//vmt
		if((14 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((14 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((14 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((14 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((14 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((14 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((14 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((14 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((14 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}	



	}
}

