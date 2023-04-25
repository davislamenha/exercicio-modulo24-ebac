const Carro = require('./Carro.js');
const Moto = require('./Moto.js');

const up = new Carro('UP! TSI', 'Volkswagen', '2014', '82cv', 'Elétrica');
const civic = new Carro('Civic EXL', 'Honda', '2018', '173cv', 'Elétrica');
const twister = new Moto('CB Twister', 'Honda', '2022', '250cc', 6);
const crosser = new Moto('Crosser', 'Yamaha', '2022', '150cc', 5);

up.verDetalhes();
civic.verDetalhes();
twister.verDetalhes();
crosser.verDetalhes();
