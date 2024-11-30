//Importamos la función sum()
const {sum, fromYENTOPOUD} = require('./app.js');

//Comenzamos con la primera prueba
test('mensaje: sumamos 14 + 9 que igual a 23' , () => {
    //comentttario: llama ala función sum()
    let total = sum(14, 9);

    //Esperamos que sum() nos devuelva 23
    expect(total).toBe(23);
});


test('segundo test ************', () => {
    let total = sum(-4, 4);
    expect(total).toBe(0)
});


test('texto', () => {
    let total = sum(-4, -8);
    expect(total).toBe(-12);
})


const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test ('mensaje: 1 dollar to yen', () => {
    let total = fromDollarToYen(1);
    expect(total).toBe(109.68);
})

test ('mensaje: 1 euro to dollar', () => {
    let total= fromEuroToDollar(1);
    expect(total).toBe(1.2);
})

test ('mensaje: 1 yen to pound', () => {
    let total = fromYenToPound(1);
    expect(total).toBe(0.0067);
})