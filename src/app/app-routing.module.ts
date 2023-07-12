import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateReservasComponent } from './components/create-reservas/create-reservas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { EditReservasComponent } from './components/edit-reservas/edit-reservas.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "create", component: CreateReservasComponent, pathMatch: "full" },
  { path: "reservas", component: ReservasComponent, pathMatch: "full" },
  { path: "edit-reservas", component: EditReservasComponent, pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
