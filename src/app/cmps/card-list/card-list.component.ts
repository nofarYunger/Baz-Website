import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

interface Advantage {
  title: string,
  icon: string,
  description: string
}

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor(private infoService: InfoService) { }
  advantages: Advantage[]

  ngOnInit(): void {
    this.advantages = this.infoService.getAdvantages()

  }

}
