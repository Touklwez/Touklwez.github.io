import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { CalculadoraComponent } from './aulas/calculadora/calculadora.component';
import { FichaAnimalComponent } from './aulas/clinica/ficha-animal/ficha-animal.component';
import { EvAndRefComponent } from './aulas/ev-and-ref/ev-and-ref.component';
import { HomeComponent } from './home/home.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "trabalhos", component: TrabalhosComponent},
  {path: "about", component: AcercaComponent},
  {path: "avaliacao-calculadora", component: CalculadoraComponent},
  {path: "ficha-animal", component : FichaAnimalComponent},
  {path: "evandref", component : EvAndRefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
