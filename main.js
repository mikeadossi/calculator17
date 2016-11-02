$(document).ready(function(){

	var operationStack = '';
	var previousOperator = '';
	var fred = { // bit fields
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
		        document.getElementById('firstScreen').value = that;
		        document.getElementById('secondScreen').value += that;
		        operationStack += that;
		        if(that == '+'){ previousOperator = fred.add }else if(that == '-'){
		        	previousOperator = fred.subtr
		        }
			}
			console.log('\n',previousOperator)
		})
	})
})












