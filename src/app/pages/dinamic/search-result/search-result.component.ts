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
      let searchStr = params['urlParam'];
      this.apiService.searchStr = searchStr.split('-').join(' ');
      this.title.setTitle(this.apiService.searchStr + '- dealslive.in');

      // this.apiService.searchResults = SearchResults.Items; // saved data
      this.apiService.searchProducts(searchStr); // get live data  
      debugger
      // this.apiService.searchResults.su   

      console.log(this.apiService.searchResults);
    });
  }


}
