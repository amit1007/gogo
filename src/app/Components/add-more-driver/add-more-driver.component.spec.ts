import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreDriverComponent } from './add-more-driver.component';

describe('AddMoreDriverComponent', () => {
  let component: AddMoreDriverComponent;
  let fixture: ComponentFixture<AddMoreDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoreDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
