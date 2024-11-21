import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersHomeComponent } from '../view/suppliers/suppliers-home/suppliers-home.component';

@NgModule({
  declarations: [SuppliersHomeComponent],
  imports: [CommonModule],
  exports: [SuppliersHomeComponent],
  providers: [],
})
export class SuppliersModule {}
