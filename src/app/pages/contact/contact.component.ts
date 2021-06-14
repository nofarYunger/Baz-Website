import { Component, OnInit } from '@angular/core';
import emailjs, {  EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    try {
     let res:Promise<EmailJSResponseStatus> = emailjs.sendForm('service_xr4oh78', 'template_biihwtd', e.target as HTMLFormElement, 'user_dHcOF1Rbjh730orPSQjJ8')
      console.log(res);
    } catch (error) {
      console.error(error);
    };
  }



}
