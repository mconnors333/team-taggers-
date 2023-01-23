import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { PropertiesComponent } from './properties/properties.component';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: PropertiesComponent },
  { path: 'Offers/:id', component: OffersComponent },
  { path: 'Listings', component: PropertiesComponent },
  { path: 'Clients', component: PropertiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
