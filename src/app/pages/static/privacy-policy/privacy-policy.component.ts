import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private title: Title,
    public meta: Meta) {
    this.title.setTitle('Privacy & Policy - dealslive.in');
    this.meta.addTag({ name: 'robots', content: "noindex, nofollow" });
  }

  ngOnInit(): void {
  }

}
