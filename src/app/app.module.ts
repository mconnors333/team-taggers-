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
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogoComponent } from './logo/logo.component';
import { SummaryComponent } from './summary/summary.component';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // provideFirestore(() => getFirestore(app)),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    OrderComponent,
    PlayersComponent,
    ScheduleComponent,
    SummaryComponent,
    LogoComponent,
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
