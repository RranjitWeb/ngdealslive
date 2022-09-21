import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services';
import { products } from 'src/assets/data/products';
import { SearchResults } from 'src/assets/data/amazon-products';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public searchResults: any[] = [];
  public metaTags: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    public meta: Meta,
    public location: Location,
    public apiService: ApiService) {
    this.searchResults = SearchResults.Items;

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let searchStr = params['searchStr'];
      this.apiService.searchStr = searchStr.split('-').join(' ');
      this.title.setTitle(this.apiService.searchStr + '- dealslive.in');

      // this.apiService.searchResults = SearchResults.Items; // saved data
      // this.updatePageMeta();

      this.getSearchResults(searchStr); // get live data

      console.log(this.apiService.searchResults);
    });
  }

  public getSearchResults(searchStr: string) {
    this.apiService.searchProductGet(searchStr).subscribe((res: any) => {
      this.apiService.searchResults = res['SearchResult'].Items;
      console.log(this.apiService.searchResults);
      this.updatePageMeta();
    }, err => {
      JSON.stringify(err);
    })
  }

  public updatePageMeta() {
    let ogDescription = 'Saving ₹' + this.apiService.searchResults[0].Offers.Listings[0].Price.Savings.Amount
      + ', Discount -' + this.apiService.searchResults[0].Offers.Listings[0].Price.Savings.Percentage + '%';
    this.metaTags = {
      metaDescription: ogDescription + ' ' + this.apiService.searchResults[0].ItemInfo.Title.DisplayValue,
      ogTitle: this.apiService.searchStr,
      ogDescription: ogDescription + ' ' + this.apiService.searchResults[0].ItemInfo.Title.DisplayValue,
      ogImage: this.apiService.searchResults[0].Images.Primary.Medium.URL,
    }
    this.apiService.setMetaTags(this.metaTags);

  }

}
