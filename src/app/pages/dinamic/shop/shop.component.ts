import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/services';
import { products } from 'src/assets/data/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public results: any[] = [];

  constructor(
    private title: Title,
    public meta: Meta,
    public apiService: ApiService) {
    this.title.setTitle('Shop - dealslive.in');
    this.meta.addTag({ name: 'description', content: "India's best offers and deals - dealslive.in" });
    // this.searchProduct('Deal Of The Day');

    this.getProductLIst();

  }

  ngOnInit(): void {
  }

  public searchProduct(searchStr: string) {
    searchStr ? searchStr : 'Deal Of The Day'
    this.apiService.searchProductGet(searchStr).subscribe((res: any) => {
      // this.results = res['SearchResult'].Items;
      this.apiService.searchResults = res['SearchResult'].Items;
    }, err => {
      JSON.stringify(err);
    })
  }

  getProductLIst() {
    this.apiService.products = products;
  }

}
