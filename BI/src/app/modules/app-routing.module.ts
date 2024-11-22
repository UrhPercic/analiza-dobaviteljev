import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersHomeComponent } from '../view/suppliers/suppliers-home/suppliers-home.component';
import { HomeComponent } from '../view/home-bi/home/home.component';
import { SettingsComponent } from '../view/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'suppliers-home',
    component: SuppliersHomeComponent,
    data: { animation: 'SuppliersPage' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { animation: 'SettingsPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
