import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cor: string;

  changeColor(corR:string){
    this.cor =   corR;
  }

  ApagarLuz(luz:HTMLElement){
    if(luz.style.visibility == "visible"){
      luz.style.visibility = "hidden";
    }else{
      luz.style.visibility = "visible";
    }
  }

  RainbowLuz(luz:HTMLElement){

    luz.style.visibility = "visible";
    this.cor  = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)

  }



}
