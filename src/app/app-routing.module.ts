import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { CalculadoraComponent } from './aulas/calculadora/calculadora.component';
import { FichaAnimalComponent } from './aulas/clinica/ficha-animal/ficha-animal.component';
import { ListaTelefonicaComponent } from './aulas/clinica/lista-telefonica/lista-telefonica.component';
import { EvAndRefComponent } from './aulas/ev-and-ref/ev-and-ref.component';
import { PColorComponent } from '../app/aulas//colors/p-color/p-color.component';
import { SColorComponent } from '../app/aulas//colors/p-color/s-color/s-color.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from '../app/aulas//lista-de-compras/add/add.component';
import { BuyComponent } from '../app/aulas//lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from '../app/aulas//lista-de-compras/lista-de-compras.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { ChuckJokesComponent } from './aulas/chuck-jokes/chuck-jokes.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "trabalhos", component: TrabalhosComponent},
  {path: "about", component: AcercaComponent},
  {path: "avaliacao-calculadora", component: CalculadoraComponent},
  {path: "ficha-animal", component : FichaAnimalComponent},
  {path: "evandref", component : EvAndRefComponent},
  {path: "lista-telefonica", component : ListaTelefonicaComponent},
  {path: "chuck", component : ChuckJokesComponent},

  {path: "lista-de-compras", component : ListaDeComprasComponent,
  children:[
    {path: 'ADD', component: AddComponent},
    {path: 'BUY', component: BuyComponent},
  ]},

  {path: "p-color", component: PColorComponent,
  children : [
    {path: ':color', component: SColorComponent},
  ]},

  {path: "NotFound", component : NotfoundComponent},
  {path: "**", redirectTo : 'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
