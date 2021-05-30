import { Component, OnInit } from '@angular/core';
import {AskChuckService} from './services/ask-chuck.service'

@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.css']
})
export class ChuckJokesComponent implements OnInit {

  chuckS : AskChuckService;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private chuckService : AskChuckService) {
    this.chuckS = chuckService;
  }

  ngOnInit(): void {
    this.GetJoke();
  }

  piada : string = "WAIT FOR IT";
  resultado : any;

  GetJoke(){
    this.chuckService.getJoke().subscribe(
      data => {
        this.resultado = data
        this.piada = data['value'];
      }
    )
  }

  piadas : any;
  getJokeFromWord(valoraPesquisar: string){
    this.chuckService.getJokeFromWord(valoraPesquisar).subscribe(
      data => {
        this.piadas = data
        console.log(this.piadas)
      }
    );
  }

}
