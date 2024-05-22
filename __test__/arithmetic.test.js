//const sum = (a,b) => a+b
test("Add 1+ 2 egal a 3", () => {
	except(sum(1,2)).toBe(3);
})

test("Multiplication 2*3 est supposer etre egale a 6", () => {
        except(multiply(2,3)).toBe(6);
})

test("Soustraction 2-3 est supposer etre egale a -1", () => {
        except(substract(2,3)).toBe(-1);
})

test("Diviser 6/3 est supposer etre egale a 2", () => {
        except(divide(6,3)).toBe(2);
})

test("Diviser 6/0 doit lever une exception", () => {
        except(divide(6,0)).toThrow("Division par zero impossible");
})

