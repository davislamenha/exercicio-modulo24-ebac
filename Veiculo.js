class Veiculo {
  constructor(rodas, modelo, marca, anoDeFabricacao, potencia) {
    this.rodas = rodas;
    this.modelo = modelo;
    this.marca = marca;
    this.anoDeFabricacao = anoDeFabricacao;
    this.potencia = potencia;
  }

  verDetalhes() {
    console.log(`${this.marca} ${this.modelo}`);
    console.table([this]);
    return this;
  }
}

module.exports = Veiculo;
