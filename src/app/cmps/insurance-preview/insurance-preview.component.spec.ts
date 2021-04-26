import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePreviewComponent } from './insurance-preview.component';

describe('InsurancePreviewComponent', () => {
  let component: InsurancePreviewComponent;
  let fixture: ComponentFixture<InsurancePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
