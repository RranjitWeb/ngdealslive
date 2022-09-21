import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private title: Title,
    public meta: Meta,
    public apiService: ApiService) {
      this.title.setTitle(apiService.product.title+' - dealslive.in');
      this.meta.addTag({ name: 'description', content: "India's best offers and deals - dealslive.in" });
  }

  ngOnInit(): void {
  }

  public change_image(image: any) {
    debugger
    var container: any = document.getElementById("main-image");
    container.src = image.src;
  }


}
