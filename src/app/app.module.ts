import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { CardProfileComponent } from './components/card-profile/card-profile/card-profile.component';
import { LatestPostCardComponent } from './components/latest-post-card/latest-post-card.component';
import { UserStatisticsCardComponent } from './components/user-statistics-card/user-statistics-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardProfileComponent,
    LatestPostCardComponent,
    UserStatisticsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
