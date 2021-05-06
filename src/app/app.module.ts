import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HeroComponent } from './cmps/hero/hero.component';
import { AdventageComponent } from './cmps/adventage/adventage.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InsuranceListComponent } from './cmps/insurance-list/insurance-list.component';
import { InsurancePreviewComponent } from './cmps/insurance-preview/insurance-preview.component';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './cmps/banner/banner.component';
import { CompaniesComponent } from './cmps/companies/companies.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CardListComponent } from './cmps/card-list/card-list.component';
import { CardPreviewComponent } from './cmps/card-preview/card-preview.component';
import { TravelComponent } from './cmps/travel/travel.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HeroComponent,
    AdventageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InsuranceListComponent,
    InsurancePreviewComponent,
    BannerComponent,
    CompaniesComponent,
    CardListComponent,
    CardPreviewComponent,
    TravelComponent,
    AppFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatIconModule,
    IvyCarouselModule,
    MatInputModule,
    FormsModule

  ],

  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
