import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public metaTags: any;
  
  constructor(
    private router: Router,
    private title: Title,
    public meta: Meta,
    public location: Location,
    public apiService: ApiService) {
    this.title.setTitle('Home - dealslive.in');

  }

  ngOnInit(): void {
    this.metaTags = {
      metaDescription: "India's No1 deals and offers portal",
      ogTitle: 'Shop best deals and offers',
      ogDescription: "India's No1 deals and offers portal",
      ogImage: "./assets/img/logo.png",
    }
    this.apiService.setMetaTags(this.metaTags);
  }

}
