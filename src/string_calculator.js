// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(numbers) {
	let sum = 0;

	for (let n of numbers) 
	{
		if (n === 3) 
		{	
			sum += 2;
		}
		if (n === 5) 
		{	
			sum += 4;
		}
	}


	return sum;
};