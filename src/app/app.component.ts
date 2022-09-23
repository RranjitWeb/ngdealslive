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

  public searchProducts(searchStr: string) {

    // this.apiService.searchProducts(searchStr);

    let url = searchStr.toLowerCase().split(' ').join('-');
    this.router.navigate(['/search/', url]);
    // this.router.navigate(['/', url]);

  }

  public onPressEnter(event: any, searchStr: string) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.searchProducts(searchStr)
    }
  }

}
