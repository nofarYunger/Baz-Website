import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor(private infoService: InfoService) { }
  images: any
  ngOnInit(): void {
    this.images = this.infoService.getCompaniesImg()
  }

}
