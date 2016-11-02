$(document).ready(function(){

	var operationStack = '';
	var previousOperator = '';
	var fred = { // we'll use bit fields to check previous operators
		mult : 1,
		divis : 2,
		add : 4, 
		subtr : 8,
		number : 16,
		ac : 32,
		ce : 64
	}

	var operator = $('.buttons').each(function(){
		var that = $(this).html()
		$(this).click(function(){
			console.log($(this),'\n\n',that)
			if(that == 'AC'){
				previousOperator = fred.ac;
				document.getElementById('firstScreen').value = '';
				document.getElementById('secondScreen').value = '';
			} else if (!isNaN(that)){ // is a number (double neg)
				document.getElementById('firstScreen').value += that;
				operationStack += that;
				previousOperator = fred.number;
			} else { // is a operator
				var mask = mult | divis | add | subtr // we check to see if any of the values are true
				var check = previousOperator & mask // bitwise and operator
				if(check != 0){
			        document.getElementById('firstScreen').value = that;
			        document.getElementById('secondScreen').value += that;
			        operationStack += that;
			        if(that == '+'){ 
			        	previousOperator = fred.add; 
			        } else if(that == '-'){
			        	previousOperator = fred.subtr;
			        } else if(that == '&times;'){
			        	previousOperator = fred.mult;
			        } else if(that == '&divide;'){
			        	previousOperator = fred.divis;
			        }
		     	} else{
		     		document.getElementById('firstScreen').value = 'can\'t perform multiple operations';
		     	}
			}
			console.log('\n',previousOperator)
		})
	})
})












