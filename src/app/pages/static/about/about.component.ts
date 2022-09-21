import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private title: Title,
    public meta: Meta) {
    this.title.setTitle('About - dealslive.in');
    this.meta.addTag({ name: 'robots', content: "noindex, nofollow" });
  }

  ngOnInit(): void {
  }

}
