import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './order/order.component';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: PropertiesComponent },
=  { path: 'Order', component: PropertiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
