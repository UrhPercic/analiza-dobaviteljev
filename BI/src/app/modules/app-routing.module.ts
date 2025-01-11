import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersHomeComponent } from '../view/suppliers/suppliers-home/suppliers-home.component';
import { HomeComponent } from '../view/home-bi/home/home.component';
import { SettingsComponent } from '../view/settings/settings.component';
import { SuppliersCompareComponent } from '../view/suppliers/suppliers-compare/suppliers-compare.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'suppliers-home',
    component: SuppliersHomeComponent,
    data: { animation: 'SuppliersPage' },
  },
  {
    path: 'suppliers-compare',
    component: SuppliersCompareComponent,
    data: { animation: 'SuppliersComparePage' },
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
