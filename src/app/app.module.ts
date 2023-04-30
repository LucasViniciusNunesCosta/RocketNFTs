import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BannerMainComponent } from './banner-main/banner-main.component';
import { GaleryComponent } from './galery/galery.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { Main4Component } from './main4/main4.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BannerMainComponent,
    GaleryComponent,
    Main2Component,
    Main3Component,
    Main4Component,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
