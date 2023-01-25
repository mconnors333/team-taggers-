import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
    OrderComponent,
    AboutComponent,
    ContactComponent,
    CheckoutComponent,
    BottomBarComponent,
    TopBarComponent,
    LandingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
