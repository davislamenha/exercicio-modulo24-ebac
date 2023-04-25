const Veiculo = require('./Veiculo');

class Moto extends Veiculo {
  constructor(modelo, marca, anoDeFabricacao, potencia, marchas) {
    super(2, modelo, marca, anoDeFabricacao, potencia);
    this.marchas = marchas;
  }
}

module.exports = Moto;
