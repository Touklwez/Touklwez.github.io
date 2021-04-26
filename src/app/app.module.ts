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
    EscolheAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }


