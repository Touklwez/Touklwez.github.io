import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-reader',
  templateUrl: './animal-reader.component.html',
  styleUrls: ['./animal-reader.component.css']
})
export class AnimalReaderComponent implements OnInit {
  @Input() animalSerLido : Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
