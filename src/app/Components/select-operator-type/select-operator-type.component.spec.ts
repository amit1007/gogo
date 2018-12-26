import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOperatorTypeComponent } from './select-operator-type.component';

describe('SelectOperatorTypeComponent', () => {
  let component: SelectOperatorTypeComponent;
  let fixture: ComponentFixture<SelectOperatorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOperatorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOperatorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
