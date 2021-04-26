export class Animal {

  nome : string;
  nomeDono: string;
  especie: string;
  imagemAnimal: string;
  dataProximaConsulta: Date | undefined;

  constructor(nome : string, nomeDono : string, especie : string, imagemAnimal : string){

    this.dataProximaConsulta = undefined
    this.nome = nome;
    this.nomeDono = nomeDono;
    this.especie = especie;
    this.imagemAnimal = imagemAnimal;

  }

}
