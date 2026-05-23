describe('Electrons Around The Cores', function() {

	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 6 for [1,2,3,4,5]', function() {
		expect(calculator.add([1,2,3,4,5])).toEqual(6);
	});

	it('[2,2,3,3] -> 4', function() {
	expect(calculator.add([2,2,3,3])).toEqual(4);
	});

});