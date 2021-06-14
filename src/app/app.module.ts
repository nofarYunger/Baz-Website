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
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './cmps/banner/banner.component';
import { CompaniesComponent } from './cmps/companies/companies.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CardListComponent } from './cmps/card-list/card-list.component';
import { CardPreviewComponent } from './cmps/card-preview/card-preview.component';
import { TravelComponent } from './cmps/travel/travel.component';
import { FooterComponent } from './cmps/footer/footer.component';
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
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatIconModule,
    IvyCarouselModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
