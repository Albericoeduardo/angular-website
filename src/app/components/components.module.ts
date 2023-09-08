import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { LatestPostCardComponent } from './latest-post-card/latest-post-card.component';
import { UserStatisticsCardComponent } from './user-statistics-card/user-statistics-card.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardProfileComponent,
    LatestPostCardComponent,
    UserStatisticsCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    CardProfileComponent,
    LatestPostCardComponent,
    UserStatisticsCardComponent
  ],
})
export class ComponentsModule { }
