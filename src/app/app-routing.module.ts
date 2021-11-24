import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdministradorCreateComponent } from './components/administrador/administrador-create/administrador-create.component';
import { AdministradorDeleteComponent } from './components/administrador/administrador-delete/administrador-delete.component';
import { AdministradorListComponent } from './components/administrador/administrador-list/administrador-list.component';
import { AdministradorUpdateComponent } from './components/administrador/administrador-update/administrador-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component:NavComponent, canActivate: [AuthGuard], children: [
    {path: 'home', component:HomeComponent},
    {path: 'adm', component:AdministradorListComponent},
    {path: 'adm/create', component:AdministradorCreateComponent},
    {path: 'adm/update/:id', component:AdministradorUpdateComponent},
    {path: 'adm/delete/:id', component:AdministradorDeleteComponent}
  ]},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
