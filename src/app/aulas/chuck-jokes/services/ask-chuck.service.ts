import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskChuckService {

  constructor(private httpAsk : HttpClient) { }


  link = 'https://api.chucknorris.io/jokes/random';
  link2 = 'https://api.chucknorris.io/jokes/search';
  piadaDoServico = "Veio Do servico";


  getJoke(){
    return this.httpAsk.get(this.link);
  }

  getJokeFromWord(valorAPesquisar){
    return this.httpAsk.get(
      this.link2,
      {
        params : {'query': valorAPesquisar}

      }
    );
  }
}
