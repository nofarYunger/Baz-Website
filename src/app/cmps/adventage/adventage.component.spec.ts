import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventageComponent } from './adventage.component';

describe('AdventageComponent', () => {
  let component: AdventageComponent;
  let fixture: ComponentFixture<AdventageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
