import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    OffersComponent,
    PropertiesComponent,
    BottomBarComponent,
    TopBarComponent,
    LandingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
