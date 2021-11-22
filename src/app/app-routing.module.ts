import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  {path: '', component:NavComponent, children: [
    {path: 'home', component:HomeComponent}
  ]},
  {path: 'resultados', component:ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
