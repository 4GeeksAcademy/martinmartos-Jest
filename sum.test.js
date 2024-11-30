//Importamos la función sum()
const {sum} = require('./app.js');

//Comenzamos con la primera prueba
test('mensaje de sum.test - test 1' , () => {
    //comentario: llama ala función sum()
    let total = sum(14, 10);
    expect(total).toBe(24);
});
