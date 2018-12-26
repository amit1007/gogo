import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptBidDetailsComponent } from './accept-bid-details.component';

describe('AcceptBidDetailsComponent', () => {
  let component: AcceptBidDetailsComponent;
  let fixture: ComponentFixture<AcceptBidDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptBidDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptBidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
