import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dealslive.in';
  public results: any[] = [];

  constructor(private router: Router, public apiService: ApiService) {

  }

  public navigateTo(searchStr: string) {
    this.apiService.searchStr = searchStr;
    let url = searchStr.toLowerCase().split(' ').join('-')
    this.router.navigate(['/', url]);
    // this.router.navigate(['/search/', url]);
  }

  public searchProducts(searchStr: string) {
    this.apiService.searchProductGet(searchStr).subscribe((res: any) => {
      this.apiService.searchResults = res['SearchResult'].Items;

      let url = searchStr.toLowerCase().split(' ').join('-')
      this.router.navigate(['/', url]);

      console.log(this.apiService.searchResults);
    }, err => {
      JSON.stringify(err);
    })
  }

  public onPressEnter(event: any, searchStr: string) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.searchProducts(searchStr)
    }
  }

}
