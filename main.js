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

	var lastOpPos = -1; // last operator position


	var operator = $('.buttons').each(function(){
		var that = $(this).html() 
		$(this).click(function(){
			//console.log($(this),'\n\n',that)
			if(that == 'AC'){
				previousOperator = fred.ac;
				document.getElementById('firstScreen').value = '';
				document.getElementById('secondScreen').value = '';
				lastOpPos = -1;
				operationStack = '';
			} else if(that == 'CE'){
				operationStack = operationStack.substring(0, lastOpPos +1);
				document.getElementById('secondScreen').value = operationStack;
			} else if (!isNaN(that)){ // is a number (double neg)
				document.getElementById('firstScreen').value += that;
				document.getElementById('secondScreen').value += that;
				operationStack += that;
				previousOperator = fred.number;
			} else if(that == '='){
				var result = eval(operationStack);
				operationStack = result;
				document.getElementById('firstScreen').value = result;
				document.getElementById('secondScreen').value += '='+result;
				console.log('result: ',result);
			} else { // is a operator
				lastOpPos = operationStack.length;
				console.log('lastOpPos: ',lastOpPos );
				var mask = fred.mult | fred.divis | fred.add | fred.subtr // we check to see if any of the values are true
				var check = previousOperator & mask // bitwise and operator
				if(check === 0){
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
			console.log('char: ',operationStack.substring(lastOpPos +1,operationStack.length));
		})
		
	})
})
