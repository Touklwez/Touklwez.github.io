import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  showMenu(){
    document.getElementById("menu").style.display = "flex";
  }

  ChangePage(){
    console.log("scrolling")
    this.router.navigate(['/about']);
  }

}


