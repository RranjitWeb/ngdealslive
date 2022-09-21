import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from 'src/app/pages/static/about/about.component';
import { ContactComponent } from 'src/app/pages/static/contact/contact.component';
import { DisclaimerComponent } from 'src/app/pages/static/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from 'src/app/pages/static/privacy-policy/privacy-policy.component';

import { HomeComponent } from 'src/app/pages/dinamic/home/home.component';
import { ShopComponent } from 'src/app/pages/dinamic/shop/shop.component';
import { ProductDetailComponent } from 'src/app/pages/dinamic/product-detail/product-detail.component';
import { SearchResultComponent } from 'src/app/pages/dinamic/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent,
    ShopComponent,
    ProductDetailComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Title, Meta, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
