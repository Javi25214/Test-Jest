const { sum } = require('./app.js');

test('14 + 9 to equal 23', () => {

    let total = sum(14, 9);


    expect(total).toBe(23);
});


test("1 euro should be 1.2dollars", function(){

    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
    expect(expected).toBe(dollars);
})

test("100 dolares should be 127900 yens", function(){

    const { fromDollarToYen } = require('./app.js')
    
    const yens = fromDollarToYen(100)

    const expected = Math.floor(100/1.2) * 127.9; 
    
    expect(expected).toBe(yens);
})

test("18000 yen should be 112 british pound", function(){

    const { fromYenToPound } = require('./app.js')

    const bp = fromYenToPound(18000)

    const expected = Math.floor((18000/127.9)) * 0.8; 
    

    expect(expected).toBe(bp);
})