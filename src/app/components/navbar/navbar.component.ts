import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navIsOpen : boolean = false

  //Am i dumb? maybe....
  callNav(){
    if(this.navIsOpen == false){
      this.navIsOpen = true;

      for(let i = 0; i < 3; i++){
        document.getElementsByClassName("burger-line")[i].classList.remove("close");
        document.getElementsByClassName("burger-line")[i].classList.add("open");
      }
      document.querySelector("nav").classList.add("navUp");
      document.querySelector("nav").classList.remove("navDown");
    }
    else
    {
      this.navIsOpen = false;

      for(let i = 0; i < 3; i++){
        document.getElementsByClassName("burger-line")[i].classList.remove("open");
        document.getElementsByClassName("burger-line")[i].classList.add("close");
      }

      document.querySelector("nav").classList.remove("navUp");
      document.querySelector("nav").classList.add("navDown");

    }
  }

  FecharNav(){
    for(let i = 0; i < 3; i++){
      document.getElementsByClassName("burger-line")[i].classList.remove("open");
      document.getElementsByClassName("burger-line")[i].classList.add("close");
    }
    document.querySelector("nav").classList.remove("navUp");
    document.querySelector("nav").classList.add("navDown");
  }

}
