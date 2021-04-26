import { getLocaleFirstDayOfWeek } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-footer',
  templateUrl: './cookies-footer.component.html',
  styleUrls: ['./cookies-footer.component.css']
})
export class CookiesFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Chama a verificacao de cookies ao inicializar a pagina.
    this.verificarCookies();
  }

  //Cookie banner opcao
  CookieClick(valor){
    switch (valor) {
      case true:
        localStorage.setItem("cookieAccepted", valor);
        document.getElementById("cookie-footer").classList.add("slide-out-bottom");
        document.getElementById("cookie-footer").classList.remove("slide-in-bottom");
        this.setCookies();
        break;

        case false:
        document.getElementById("cookie-footer").classList.remove("slide-in-bottom");
        document.getElementById("cookie-footer").classList.add("slide-out-bottom");
        localStorage.setItem("cookieAccepted", valor);
        break;

        default:
          break;
      }
  }

  //#region Cookie Seter
  //cookies para o data mining
  setCookies(){
    localStorage.setItem("linguagem", navigator.language);
    localStorage.setItem("browser", this.getBrowserName());
    localStorage.setItem("diaVisita", String(this.getDiaVisita()));
    localStorage.setItem("horasVisita", String(this.getHorasVisita()));
    localStorage.setItem("ecra", this.getScreenSize());

  }
  //#endregion



  //Verificacao de existencia de coookies.
  verificarCookies(){
    if(JSON.parse(localStorage.getItem("cookieAccepted")) == true){
      document.getElementById("cookie-footer").style.display = "none";
      console.log(this.getBrowserName());
      return true;
    }
    else if(JSON.parse(localStorage.getItem("cookieAccepted")) == false){
      document.getElementById("cookie-footer").classList.add("slide-out-bottom");
      document.getElementById("cookie-footer").style.display = "none";
      return false;
    }
    else{
      document.getElementById("cookie-footer").classList.add("slide-in-bottom");
    }
  }


    //#region GET USER DATA

    //Obter o nome do browser
    getBrowserName() {
      const agent = window.navigator.userAgent.toLowerCase()
      switch (true) {
        case agent.indexOf('edge') > -1:
          return 'edge';
        case agent.indexOf('opr') > -1 && !!(<any>window).opr:
          return 'opera';
        case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
          return 'chrome';
        case agent.indexOf('trident') > -1:
          return 'ie';
        case agent.indexOf('firefox') > -1:
          return 'firefox';
        case agent.indexOf('safari') > -1:
          return 'safari';
        default:
          return 'other';
      }
    }

    //Objeto com a data atual
    data = new Date;
    getDiaVisita() : string{
      return String(this.data);
    }
    getHorasVisita() : string{
      return this.data.getHours() + ":" + this.data.getMinutes() + ":" + this.data.getSeconds();
    }

    //get screen size
    getScreenSize () : string{
      return screen.width + "x" + screen.height;
    }
    //#endregion



}


