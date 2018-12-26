import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherBidComponent } from './higher-bid.component';

describe('HigherBidComponent', () => {
  let component: HigherBidComponent;
  let fixture: ComponentFixture<HigherBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
