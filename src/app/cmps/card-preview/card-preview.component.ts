import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {
  @Input() advantage:any
  constructor() { }

  ngOnInit(): void {
  }

}
