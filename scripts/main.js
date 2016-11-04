$(document).ready(function(){

	var operationStack = '';
	var currentOperator = 0;
	var lastOperator = 0;
	var fred = { // we'll use bit fields to check previous operators
		mult : 1,
		divis : 2,
		add : 4,
		subtr : 8,
		number : 16,
		ac : 32,
		ce : 64
	}

	var lastOpPos = []; // last operator position
	lastOpPos.push(-1);

	var operator = $('.buttons').each(function(){
		var that = $(this).html()
		$(this).click(function(){
			//console.log($(this),'\n\n',that)
			if(that == 'AC'){
				lastOperator = currentOperator & ( fred.mult | fred.divis | fred.add | fred.subtr ) ? currentOperator : lastOperator
				currentOperator = fred.ac;
				document.getElementById('firstScreen').value = '';
				document.getElementById('secondScreen').value = '';
				lastOpPos = [];
				lastOpPos.push(-1);
				operationStack = '';
			} else if(that == 'CE'){
				operationStack = operationStack.substring(0, lastOpPos.pop()+1);
				document.getElementById('secondScreen').value = operationStack;
			} else if (!isNaN(that) || that == '.'){ // is a number (double neg)
				var obj = {
					that : that,
					currentOperator : currentOperator,
					operationStack : operationStack,
					fred : fred
				}
					zeroAndDecimalHandling(obj);
					// pass by reference
					that = obj.that;
					lastOperator = currentOperator & ( fred.mult | fred.divis | fred.add | fred.subtr ) ? currentOperator : lastOperator
					currentOperator = obj.currentOperator;
					operationStack = obj.operationStack;
					fred = obj.fred;
			} else if(that == '='){
				console.log('operationStack: ',operationStack);
				var result = eval(operationStack);
				operationStack = result;
				document.getElementById('firstScreen').value = result;
				updateDisplay('='+result,2);
				console.log('result: ',result);
			} else { // is a operator
				lastOpPos.push(operationStack.length);
				var mask = fred.mult | fred.divis | fred.add | fred.subtr // we check to see if any of the values are true
				var check = currentOperator & mask // bitwise and operator
				if(check === 0){
			        document.getElementById('firstScreen').value = that;
			        updateDisplay(that,2);
			        operationStack += that;
			        if(that == '+'){
								lastOperator = currentOperator & ( fred.mult | fred.divis | fred.add | fred.subtr ) ? currentOperator : lastOperator
			        	currentOperator = fred.add;
			        } else if(that == '-'){
								lastOperator = currentOperator & ( fred.mult | fred.divis | fred.add | fred.subtr ) ? currentOperator : lastOperator
			        	currentOperator = fred.subtr;
			        } else if(that == '&times;'){
								lastOperator = currentOperator & ( fred.mult | fred.divis | fred.add | fred.subtr ) ? currentOperator : lastOperator
			        	currentOperator = fred.mult;
			        } else if(that == '&divide;'){
								lastOperator = currentOperator & ( fred.mult | fred.divis | fred.add | fred.subtr ) ? currentOperator : lastOperator
			        	currentOperator = fred.divis;
			        }
		     	} else{
		     		document.getElementById('firstScreen').value = 'can\'t perform multiple operations';
		     	}
			}

		})

	})
})

var updateDisplay = function(val,screen){
	if(screen == 1){
		document.getElementById('firstScreen').value += val;
	} else if(screen == 2){
		document.getElementById('secondScreen').value += val;
	}
}

var zeroAndDecimalHandling = function(obj){
	var mask = obj.fred.mult | obj.fred.divis | obj.fred.add | obj.fred.subtr // we check to see if any of the values are true
	var check = obj.currentOperator & mask // bitwise and operator
	if(currentOperator == lastOperator){}
	if(check != 0){
		document.getElementById('firstScreen').value = '';
	}
	mask = obj.fred.number;
	check = obj.currentOperator & mask;
	if(check === 0 && obj.that == '.'){
		obj.operationStack += 0;
		updateDisplay('0.',1);
		updateDisplay('0.',2);
	} else {
		updateDisplay(obj.that,1);
		updateDisplay(obj.that,2);
	}
	obj.operationStack += obj.that;
	obj.currentOperator = obj.fred.number;
}
