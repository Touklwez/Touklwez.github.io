import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from 'src/app/aulas/services/phone-book.service';
@Component({
  selector: 'app-lista-telefonica',
  templateUrl: './lista-telefonica.component.html',
  styleUrls: ['./lista-telefonica.component.css']
})
export class ListaTelefonicaComponent implements OnInit {

  phoneService : PhoneBookService;

  constructor( pService : PhoneBookService) {
    this.phoneService = pService;

  }

  teste(){
    console.log(this.phoneService.phoneList)
  }

  ngOnInit(): void {
  }

}
