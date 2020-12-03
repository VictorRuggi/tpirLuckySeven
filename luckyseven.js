/*Initialization*/
function init(){
	dollars=7;
	carPrice=(Math.floor(Math.random() * 50000))+10000;
	numbersFound=0;
	won=false;
	carTypes=["Mazda CX3", "Mazda 3", "Honda Accord", "Honda Civic", "Honda CR-V", "Toyota Prius", "Chevy Silverado", "Chevy Colorado", "Nissan Maxima", "Ford Focus", "Chevy Equinox", "Lexus LX570", "Mercedes B250", "Lincoln MKZ", "Audi A4 Sedan", "Chevy Corvette"];
	carPlayingFor="";
	
	if(carPrice > 10000 && carPrice < 17000){
		var e = Math.floor(Math.random() * 2); //Mazda
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 17000 && carPrice < 20000){
		var e = (Math.floor(Math.random() * 4) + 2); //Anything up to Prius
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 20000 && carPrice < 28000){
		var e = (Math.floor(Math.random() * 3) + 6); //Anything up to Maxima
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 28000 && carPrice < 35000){
		var e = (Math.floor(Math.random() * 3) + 9);
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 35000 && carPrice < 42000){
		var e = (Math.floor(Math.random() * 2) + 12);
		carPlayingFor = carTypes[e];
	}
	else{
		var e = (Math.floor(Math.random() * 2) + 14);
		carPlayingFor = carTypes[e];
	}
	
	carString=""+carPrice;
	carPriceArr=new Array (5);
	
	for(var i=0; i<carPriceArr.length; i++){
		carPriceArr[i] = parseInt(carString.substring(i,i+1), 10);
	}
	
	document.getElementById("num1text").innerHTML = carPriceArr[0];
	document.getElementById("num2text").innerHTML = carPriceArr[1];
	document.getElementById("num3text").innerHTML = carPriceArr[2];
	document.getElementById("num4text").innerHTML = carPriceArr[3];
	document.getElementById("num5text").innerHTML = carPriceArr[4];
	
	addEvent(document.getElementById("startGame"), "click", startGame);
	addEvent(document.getElementById("submitGuess"), "click", submitGuess);
	addEvent(document.getElementById("resetGame"), "click", resetGame);
	
	document.getElementById("startGame").disabled = false;
	document.getElementById("submitGuess").disabled = true;
	document.getElementById("resetGame").disabled = true;
	document.getElementById("input").disabled = true;
}

function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function startGame(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("startGame").disabled = true;
	document.getElementById("submitGuess").disabled = false;
	document.getElementById("resetGame").disabled = false;
	document.getElementById("input").disabled = false;
	
	if (carPlayingFor.substring(0,1).toLowerCase().valueOf() == "a" || carPlayingFor.substring(0,1).toLowerCase().valueOf() == "e" || 
	carPlayingFor.substring(0,1).toLowerCase().valueOf() == "i" || carPlayingFor.substring(0,1).toLowerCase().valueOf() == "o" || 
	carPlayingFor.substring(0,1).toLowerCase().valueOf() == "u" ) {
		document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You will be playing for an " + carPlayingFor + ". You have $" + dollars + " remaining.</b></p>";
	}
	else{
		document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You will be playing for a " + carPlayingFor + ". You have $" + dollars + " remaining.</b></p>";
	}
	
	document.getElementById("num1text").style.visibility = "visible";
	numbersFound++;
}

function submitGuess(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	try {
		if (numbersFound < 5 && dollars > 0) {
			switch (numbersFound){
				case 1: {
					if(document.getElementById("input").value < 0 || document.getElementById("input").value > 9){
						throw new Error();
					}

					var difference = Math.abs(carPriceArr[numbersFound] - document.getElementById("input").value);
					dollars = dollars - difference;
					
					if(dollars > 0){
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You guessed " + document.getElementById("input").value + ", the actual digit is " + carPriceArr[numbersFound] + ".<br/>You have $" + dollars + " remaining.</b></p>";
						document.getElementById("num2text").style.visibility = "visible";
						numbersFound++;
						break;
					}
					else {
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Game over! You ran out of dollars. The price of the car is: $" + carString.substring(0,2) + "," + carString.substring(2,5) + "</b></p>";
						document.getElementById("num2text").style.visibility = "visible";
						document.getElementById("num3text").style.visibility = "visible";
						document.getElementById("num4text").style.visibility = "visible";
						document.getElementById("num5text").style.visibility = "visible";
						document.getElementById("submitGuess").disabled = true;
						break;
					}
				}
				case 2: {
					if(document.getElementById("input").value < 0 || document.getElementById("input").value > 9){
						throw new Error();
					}

					var difference = Math.abs(carPriceArr[numbersFound] - document.getElementById("input").value);
					dollars = dollars - difference;
					
					if(dollars > 0){
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You guessed " + document.getElementById("input").value + ", the actual digit is " + carPriceArr[numbersFound] + ".<br/>You have $" + dollars + " remaining.</b></p>";
						document.getElementById("num3text").style.visibility = "visible";
						numbersFound++;
						break;
					}
					else {
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Game over! You ran out of dollars. The price of the car is: $" + carString.substring(0,2) + "," + carString.substring(2,5) + "</b></p>";
						document.getElementById("num3text").style.visibility = "visible";
						document.getElementById("num4text").style.visibility = "visible";
						document.getElementById("num5text").style.visibility = "visible";
						document.getElementById("submitGuess").disabled = true;
						break;
					}
				}
				case 3: {
					if(document.getElementById("input").value < 0 || document.getElementById("input").value > 9){
						throw new Error();
					}

					var difference = Math.abs(carPriceArr[numbersFound] - document.getElementById("input").value);
					dollars = dollars - difference;
					
					if(dollars > 0){
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You guessed " + document.getElementById("input").value + ", the actual digit is " + carPriceArr[numbersFound] + ".<br/>You have $" + dollars + " remaining.</b></p>";
						document.getElementById("num4text").style.visibility = "visible";
						numbersFound++;
						break;
					}
					else {
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Game over! You ran out of dollars. The price of the car is: $" + carString.substring(0,2) + "," + carString.substring(2,5) + "</b></p>";
						document.getElementById("num4text").style.visibility = "visible";
						document.getElementById("num5text").style.visibility = "visible";
						document.getElementById("submitGuess").disabled = true;
						break;
					}
				}
				case 4: {
					if(document.getElementById("input").value < 0 || document.getElementById("input").value > 9){
						throw new Error();
					}

					var difference = Math.abs(carPriceArr[numbersFound] - document.getElementById("input").value);
					dollars = dollars - difference;
					
					if(dollars > 0){
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You guessed " + document.getElementById("input").value + ", the actual digit is " + carPriceArr[numbersFound] + ".<br/>You have $" + dollars + " remaining.</b></p>";
						document.getElementById("num5text").style.visibility = "visible";
						numbersFound++;
						break;
					}
					else {
						document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Game over! You ran out of dollars. The price of the car is: $" + carString.substring(0,2) + "," + carString.substring(2,5) + "</b></p>";
						document.getElementById("num5text").style.visibility = "visible";
						document.getElementById("submitGuess").disabled = true;
						break;
					}
				}
			}
		}
	}
	catch (err)
	{
		document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>Invalid input passed</b></p>";
	}
	

	if(dollars > 0 && numbersFound == 5){
		won = true;

		if (carPlayingFor.substring(0,1).toLowerCase().valueOf() == ("a") || carPlayingFor.substring(0,1).toLowerCase().valueOf() == ("e") || 
		carPlayingFor.substring(0,1).toLowerCase().valueOf() == ("i") || carPlayingFor.substring(0,1).toLowerCase().valueOf() == ("o") || 
		carPlayingFor.substring(0,1).toLowerCase().valueOf() == ("u") ){
			document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You guessed " + document.getElementById("input").value + ", the actual digit is " + carPriceArr[numbersFound-1] + ".<br/>You have $" + dollars + " remaining.</b></p><p style=\"text-align: center\"><b>Congratulations! You won an " + carPlayingFor + " worth $" + carString.substring(0,2) + "," + carString.substring(2,5) + "!</b></p>";
			document.getElementById("submitGuess").disabled = true;
		}
		else {
			document.getElementById("gameplay").innerHTML = "<p style=\"text-align: center\"><b>You guessed " + document.getElementById("input").value + ", the actual digit is " + carPriceArr[numbersFound-1] + ".<br/>You have $" + dollars + " remaining.</b></p><p style=\"text-align: center\"><b>Congratulations! You won a " + carPlayingFor + " worth $" + carString.substring(0,2) + "," + carString.substring(2,5) + "!</b></p>";
			document.getElementById("submitGuess").disabled = true;
		}
	}
}

function resetGame(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("num1text").style.visibility = "hidden";
	document.getElementById("num2text").style.visibility = "hidden";
	document.getElementById("num3text").style.visibility = "hidden";
	document.getElementById("num4text").style.visibility = "hidden";
	document.getElementById("num5text").style.visibility = "hidden";
	
	document.getElementById("num1text").value = "";
	document.getElementById("num2text").value = "";
	document.getElementById("num3text").value = "";
	document.getElementById("num4text").value = "";
	document.getElementById("num5text").value = "";
	document.getElementById("input").value = "";
	
	document.getElementById("startGame").disabled = false;
	document.getElementById("submitGuess").disabled = true;
	document.getElementById("resetGame").disabled = true;
	document.getElementById("input").disabled = true;
	
	/*REINITIALIZATION*/
	dollars=7;
	carPrice=(Math.floor(Math.random() * 50000))+10000;
	numbersFound=0;
	won=false;
	carTypes=["Mazda CX3", "Mazda 3", "Honda Accord", "Honda Civic", "Honda CR-V", "Toyota Prius", "Chevy Silverado", "Chevy Colorado", "Nissan Maxima", "Ford Focus", "Chevy Equinox", "Lexus LX570", "Mercedes B250", "Lincoln MKZ", "Audi A4 Sedan", "Chevy Corvette"];
	carPlayingFor="";
	document.getElementById("gameplay").innerHTML = "";
	
	if(carPrice > 10000 && carPrice < 17000){
		var e = Math.floor(Math.random() * 2); //Mazda
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 17000 && carPrice < 20000){
		var e = (Math.floor(Math.random() * 4) + 2); //Anything up to Prius
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 20000 && carPrice < 28000){
		var e = (Math.floor(Math.random() * 3) + 6); //Anything up to Maxima
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 28000 && carPrice < 35000){
		var e = (Math.floor(Math.random() * 3) + 9);
		carPlayingFor = carTypes[e];
	}
	else if(carPrice > 35000 && carPrice < 42000){
		var e = (Math.floor(Math.random() * 2) + 12);
		carPlayingFor = carTypes[e];
	}
	else{
		var e = (Math.floor(Math.random() * 2) + 14);
		carPlayingFor = carTypes[e];
	}
	
	carString=""+carPrice;
	carPriceArr=new Array (5);
	
	for(var i=0; i<carPriceArr.length; i++){
		carPriceArr[i] = parseInt(carString.substring(i,i+1), 10);
	}
	
	document.getElementById("num1text").innerHTML = carPriceArr[0];
	document.getElementById("num2text").innerHTML = carPriceArr[1];
	document.getElementById("num3text").innerHTML = carPriceArr[2];
	document.getElementById("num4text").innerHTML = carPriceArr[3];
	document.getElementById("num5text").innerHTML = carPriceArr[4];
}

var dollars, carPrice, numbersFound, won, carTypes, carPlayingFor, carPriceArr, carString;
window.onload = init;