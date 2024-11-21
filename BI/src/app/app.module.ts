import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { NavigationComponent } from './view/navigation/navigation.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeBiModule } from './modules/home-bi.module';
import { SuppliersModule } from './modules/suppliers.module';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SuppliersModule,
    HomeBiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
