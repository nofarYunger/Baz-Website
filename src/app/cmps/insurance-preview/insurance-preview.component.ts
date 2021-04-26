import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'insurance-preview',
  templateUrl: './insurance-preview.component.html',
  styleUrls: ['./insurance-preview.component.scss']
})
export class InsurancePreviewComponent {
  @Input() insurance
  constructor() { }


}
