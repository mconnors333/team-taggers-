import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
