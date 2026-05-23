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

	it('[6,6,4,4,1,3] -> 2', function() {
	expect(calculator.add([6,6,4,4,1,3])).toEqual(2);
	});

	it('[3,5,3,5,4,2] -> 12', function() {
	expect(calculator.add([3,5,3,5,4,2])).toEqual(12);
	});

	it('[5,5,3,1] -> 10', function() {
	expect(calculator.add([5,5,3,1])).toEqual(10);
	});

});