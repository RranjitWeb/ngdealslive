import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor(
    private title: Title,
    public meta: Meta) {
    this.title.setTitle('Disclaimer - dealslive.in');
    this.meta.addTag({ name: 'robots', content: "noindex, nofollow" });
  }

  ngOnInit(): void {
  }

}
