// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(numbers) {
	let sum = 0;

	for (let number of numbers) 
	{
		if (number === 3) 
		{	
			sum += 2;
		}
		if (number === 5) 
		{	
			sum += 4;
		}
	}


	return sum;
};