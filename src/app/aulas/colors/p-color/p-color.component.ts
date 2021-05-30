import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-color',
  templateUrl: './p-color.component.html',
  styleUrls: ['./p-color.component.css']
})
export class PColorComponent implements OnInit {

  cor : string;

  constructor() { }

  ngOnInit(): void {
  }


  MudarCor(cor : any){
    this.cor = cor;
  }
}
