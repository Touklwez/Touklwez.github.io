import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})
export class TrabalhosComponent implements OnInit {

  constructor(private elementRef : ElementRef) { }

  ngOnInit(): void {
  }

}
