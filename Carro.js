const Veiculo = require('./Veiculo');

class Carro extends Veiculo {
  constructor(modelo, marca, anoDeFabricacao, potencia, direcao) {
    super(4, modelo, marca, anoDeFabricacao, potencia);
    this.direcao = direcao;
  }
}

module.exports = Carro;
