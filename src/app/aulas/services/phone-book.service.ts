import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  length: any;
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }

  phoneList = [

  {
    nome: "Flávio Costa",
    idade: 19,
    numero: 900900900
  },
  {
    nome: "Flávio Costa",
    idade: 19,
    numero: 900900900
  },

  ]
  constructor() { }
}
