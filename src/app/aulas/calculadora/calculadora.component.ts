import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  conta: any = "";
  contaCima: any = 0;
  resultado : number;

  numeros(number){
    this.conta += number;
    this.contaCima = this.conta;
    this.resultado = eval(this.contaCima);
    console.log(this.conta);
  }

  reset(){
    this.resultado = 0
    this.conta = 0
    this.contaCima = 0
  }

  apagar(){
    this.conta = this.conta.slice(0, -1);
    this.contaCima = this.conta.slice(0, -1);
  }
}
