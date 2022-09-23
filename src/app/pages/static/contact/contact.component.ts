import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private title: Title,
    public meta: Meta) {
    this.title.setTitle('Contact - dealslive.in');
    this.meta.addTag({ name: 'robots', content: "index, follow" });
  }

  ngOnInit(): void {
  }

}
