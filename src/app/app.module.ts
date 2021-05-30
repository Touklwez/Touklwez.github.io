import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { CalculadoraComponent } from './aulas/calculadora/calculadora.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { FichaAnimalComponent } from './aulas/clinica/ficha-animal/ficha-animal.component';
import { AnimalReaderComponent } from './aulas/clinica/animal-reader/animal-reader.component';
import { EscolheAnimalComponent } from './aulas/clinica/escolhe-animal/escolhe-animal.component';
import { EvAndRefComponent } from './aulas/ev-and-ref/ev-and-ref.component';
import { ListaTelefonicaComponent } from './aulas/clinica/lista-telefonica/lista-telefonica.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ListaDeComprasComponent } from '../app/aulas/lista-de-compras/lista-de-compras.component';
import { AddComponent } from '../app/aulas//lista-de-compras/add/add.component';
import { BuyComponent } from '../app/aulas//lista-de-compras/buy/buy.component';
import { PColorComponent } from '../app/aulas//colors/p-color/p-color.component';
import { ChuckJokesComponent } from './aulas/chuck-jokes/chuck-jokes.component';

import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


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
    EvAndRefComponent,
    ListaTelefonicaComponent,
    NotfoundComponent,
    ListaDeComprasComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    ChuckJokesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatChipsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatAutocompleteModule

  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }


