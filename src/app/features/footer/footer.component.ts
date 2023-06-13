import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { Newsletter } from '../../models/newsletter.model'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private newsletterService: NewsletterService) {}

  newslettermodel: Newsletter = {
    email: ''
  };

 subscribe() {
    if (this.newslettermodel.email=== '') {
      console.warn('Email field is empty');
      return;
    }
    this.newslettermodel.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.newsletterService.createNewsletter(this.newslettermodel)
  }
//
//   constructor(private newsletterService: NewsletterService) {}
//
//   newslettermodel: Newsletter = {
//     email: ''
//   };
//
//   subscribeNow() {
//   this.newslettermodel.email = (<HTMLInputElement>document.getElementById('email')).value;
//     this.newsletterService.createNewsletter(this.newslettermodel);
//   }
}
