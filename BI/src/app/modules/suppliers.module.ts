import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersHomeComponent } from '../view/suppliers/suppliers-home/suppliers-home.component';
import { SuppliersCompareComponent } from '../view/suppliers/suppliers-compare/suppliers-compare.component';

@NgModule({
  declarations: [SuppliersHomeComponent, SuppliersCompareComponent],
  imports: [CommonModule],
  exports: [SuppliersHomeComponent, SuppliersCompareComponent],
  providers: [],
})
export class SuppliersModule {}
