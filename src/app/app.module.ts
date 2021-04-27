import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HostListener, Component } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AcercaComponent } from './acerca/acerca.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CookiesFooterComponent } from './components/cookies-footer/cookies-footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CalculadoraComponent } from './aulas/calculadora/calculadora.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { FichaAnimalComponent } from './aulas/clinica/ficha-animal/ficha-animal.component';
import { AnimalReaderComponent } from './aulas/clinica/animal-reader/animal-reader.component';
import { EscolheAnimalComponent } from './aulas/clinica/escolhe-animal/escolhe-animal.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './aulas/ev-and-ref/ev-and-ref.component';


import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrabalhosComponent,
    LoaderComponent,
    AcercaComponent,
    CookiesFooterComponent,
    CalculadoraComponent,
    ProjetosComponent,
    FichaAnimalComponent,
    AnimalReaderComponent,
    EscolheAnimalComponent,
    EvAndRefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatChipsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }


