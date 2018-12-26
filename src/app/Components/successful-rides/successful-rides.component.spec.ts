import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRidesComponent } from './successful-rides.component';

describe('SuccessfulRidesComponent', () => {
  let component: SuccessfulRidesComponent;
  let fixture: ComponentFixture<SuccessfulRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
