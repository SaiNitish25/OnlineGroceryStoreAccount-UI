import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddCustomerComponent } from './view-add-customer.component';

describe('ViewAddCustomerComponent', () => {
  let component: ViewAddCustomerComponent;
  let fixture: ComponentFixture<ViewAddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
