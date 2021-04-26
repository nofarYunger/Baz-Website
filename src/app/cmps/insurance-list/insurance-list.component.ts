import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';


interface Insurance {
  icon: string,
  title: string,
  description: string
}

@Component({
  selector: 'insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss']
})
export class InsuranceListComponent implements OnInit {

  constructor(private infoService: InfoService) { }
  insurances: Insurance[]
  ngOnInit(): void {
    this.insurances = this.infoService.getInsuranceOptions()
  }




}
