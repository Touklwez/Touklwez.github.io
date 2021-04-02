import { ElementRef, HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor(private elementRef : ElementRef) { }

  ngOnInit(): void {
  }


  titulos : Array<string> = ["Lorem Ipsium", "Lorem Ipsium", "Lorem Ipsium"];
  descricoes : Array<string> = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                              ];


  teste : number = 1

  @HostListener("document:scroll")
  scrollfunction(){
    this.teste = this.teste + 1;
    console.log(this.teste);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "none";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosition = "center";
 }
}
