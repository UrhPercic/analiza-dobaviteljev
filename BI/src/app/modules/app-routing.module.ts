import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersHomeComponent } from '../view/suppliers/suppliers-home/suppliers-home.component';
import { HomeComponent } from '../view/home-bi/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'suppliers-home', component: SuppliersHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
