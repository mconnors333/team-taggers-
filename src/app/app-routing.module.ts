import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogoComponent } from './logo/logo.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Order', component: PlayersComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Players', component: PlayersComponent },
  { path: 'Schedule', component: ScheduleComponent },
  { path: 'Logo', component: LogoComponent },
  { path: 'Summary', component: SummaryComponent },
  { path: 'Checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
