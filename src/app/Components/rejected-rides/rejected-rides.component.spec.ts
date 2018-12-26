import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedRidesComponent } from './rejected-rides.component';

describe('RejectedRidesComponent', () => {
  let component: RejectedRidesComponent;
  let fixture: ComponentFixture<RejectedRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
