import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BannerMainComponent } from './banner-main/banner-main.component';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BannerMainComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
