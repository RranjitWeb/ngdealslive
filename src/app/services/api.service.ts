import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { AppHttpClient } from './httpClient.service';
import { products } from 'src/assets/data/products';
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService extends BehaviorSubject<any> {
    // private api = environment.API_URL;


    public searchStr: string = '';
    public searchResults: any[] = [];

    public products: any[] = [];
    public product: any;
    public metaTags: any;

    public constructor(
        public router: Router,
        private title: Title,
        public meta: Meta,
        public location: Location,
        // public http: HttpClient
        public $http: AppHttpClient
    ) {
        super({});
    }

    // === API Calls ===
    public searchProductGet(str: string) {
        return this.$http.Get('/paapi?search=' + str);
    }
    public searchProductPost(params: any) {
        return this.$http.Post('/paapi', params);
    }

    public navigateTo(searchStr: string) {
        this.searchStr = searchStr;
        let url = searchStr.toLowerCase().split(' ').join('-')
        // this.router.navigate(['/p/', url]);
        // this.router.navigate(['/search/', url]);
        this.router.navigate(['/category/', url]);
    }

    // === Common Functions | Search from local ===
    public searchProductsLocal(catName: string, pname: string) {
        let category = products.filter((catEle: any) => {
            if (catEle.title == catName) {
                return catEle;
            }
        })
        let product = category[0].productList.filter((ele: any) => {
            return ele.title == pname;
        })
        this.product = product[0];
        console.log(this.product);

        let url = pname.toLowerCase().split(' ').join('-')
        this.router.navigate(['/p/', url]);
        console.log(this.searchResults);
    }

    // === Common Functions | Search from remote ===
    public searchProducts(searchStr: string) {
        debugger
        this.searchProductGet(searchStr).subscribe((res: any) => {
            this.searchResults = res['SearchResult'].Items;

            // let url = searchStr.toLowerCase().split(' ').join('-')
            // this.router.navigate(['/', url]);
            this.updatePageMeta();

            console.log(this.searchResults);
        }, err => {
            JSON.stringify(err);
        })
    }

    public updatePageMeta() {
        let ogDescription = 'Saving ₹' + this.searchResults[0].Offers.Listings[0].Price.Savings.Amount
            + ', Discount -' + this.searchResults[0].Offers.Listings[0].Price.Savings.Percentage + '%';
        this.metaTags = {
            metaDescription: ogDescription + ' ' + this.searchResults[0].ItemInfo.Title.DisplayValue,
            ogTitle: this.searchStr,
            ogDescription: ogDescription + ' ' + this.searchResults[0].ItemInfo.Title.DisplayValue,
            ogImage: this.searchResults[0].Images.Primary.Medium.URL,
        }
        this.setMetaTags(this.metaTags);

    }

    public setMetaTags(metaTags: any) {
        let pageUrl = environment.WebBaseUrl + this.location.path(); // location.href
        this.meta.addTags([
            { name: 'description', content: metaTags.metaDescription },
            { name: 'og:title', content: metaTags.ogTitle + ' - dealslive.in' },
            { name: 'og:description', content: metaTags.ogDescription },
            { name: 'og:image', content: metaTags.ogImage },
            { name: 'og:url', content: pageUrl },
        ])
    }

    public goBack() {
        history.back();
    }

}
