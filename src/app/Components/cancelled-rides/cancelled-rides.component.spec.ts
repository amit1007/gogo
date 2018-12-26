import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledRidesComponent } from './cancelled-rides.component';

describe('CancelledRidesComponent', () => {
  let component: CancelledRidesComponent;
  let fixture: ComponentFixture<CancelledRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
