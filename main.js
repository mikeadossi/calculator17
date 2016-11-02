$(document).ready(function(){

	$('#acBtn').click(function(){
		document.getElementById('firstScreen').value = '';
		document.getElementById('secondScreen').value = '';
		console.log('yolo')
	})

	$('#one').click(function(){
		document.getElementById('firstScreen').value += '1';
		document.getElementById('secondScreen').value += '1';
	})

	$('#two').click(function(){
		document.getElementById('firstScreen').value += '2';
		document.getElementById('secondScreen').value += '2';
	})

	$('#three').click(function(){
		document.getElementById('firstScreen').value += '3';
		document.getElementById('secondScreen').value += '3';
	})

	$('#four').click(function(){
		document.getElementById('firstScreen').value += '4';
		document.getElementById('secondScreen').value += '4';
	})

	$('#five').click(function(){
		document.getElementById('firstScreen').value += '5';
		document.getElementById('secondScreen').value += '5';
	})

	$('#six').click(function(){
		document.getElementById('firstScreen').value += '6';
		document.getElementById('secondScreen').value += '6';
	})

	$('#seven').click(function(){
		document.getElementById('firstScreen').value += '7';
		document.getElementById('secondScreen').value += '7';
	})

	$('#eight').click(function(){
		document.getElementById('firstScreen').value += '8';
		document.getElementById('secondScreen').value += '8';
	})

	$('#nine').click(function(){
		document.getElementById('firstScreen').value += '9';
		document.getElementById('secondScreen').value += '9';
	})

	$('#zero').click(function(){
		document.getElementById('firstScreen').value += '0';
		document.getElementById('secondScreen').value += '0';
	})

	$('#plusOperator').click(function(){
		document.getElementById('firstScreen').value += '+';
		document.getElementById('secondScreen').value += '+';
	})

	$('#minusOperator').click(function(){
		document.getElementById('firstScreen').value += '-';
		document.getElementById('secondScreen').value += '-';
	})

	$('#multiplicationOperator').click(function(){
		document.getElementById('firstScreen').value += 'x';
		document.getElementById('secondScreen').value += 'x';
	})

	$('#divisionOperator').click(function(){
		document.getElementById('firstScreen').value += '÷';
		document.getElementById('secondScreen').value += '÷';
	})

	$('#point').click(function(){
		document.getElementById('firstScreen').value += '.';
		document.getElementById('secondScreen').value += '.';
	})

	$('#equalsBtn').click(function(){
		var solution;
		var problem = document.getElementById('secondScreen').value
		document.getElementById().value += solution
	})
})