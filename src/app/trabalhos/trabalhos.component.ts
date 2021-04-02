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

  //Alterar Background
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('../../assets/trabalhos/background.png')";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
 }

}
