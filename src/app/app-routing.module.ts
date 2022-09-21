import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from 'src/app/pages/static/about/about.component';
import { ContactComponent } from 'src/app/pages/static/contact/contact.component';
import { DisclaimerComponent } from 'src/app/pages/static/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from 'src/app/pages/static/privacy-policy/privacy-policy.component';

import { HomeComponent } from 'src/app/pages/dinamic/home/home.component';
import { ShopComponent } from 'src/app/pages/dinamic/shop/shop.component';
import { ProductDetailComponent } from 'src/app/pages/dinamic/product-detail/product-detail.component';
import { SearchResultComponent } from 'src/app/pages/dinamic/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/', pathMatch: 'full'
  },
  {
    path: "",
    component: ShopComponent,
    // component: HomeComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "disclaimer",
    component: DisclaimerComponent,
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
  },
  // ===Local db content ===
  {
    path: "shop",
    component: ShopComponent,
  },
  {
    path: "p/:productName",
    component: ProductDetailComponent,
  },
  // === Amazon live conten ===
  {
    path: "details/:productName",
    component: ProductDetailComponent,
  },
  {
    path: ":searchStr",
    component: SearchResultComponent,
  },
  {
    path: "search/:searchStr",
    component: SearchResultComponent,
  },
  {
    path: "search/:s",
    component: SearchResultComponent,
  },
  {
    path: "**",
    redirectTo: "",
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
