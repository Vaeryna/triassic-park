import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInBasketComponent } from './add-in-basket.component';

describe('AddInBasketComponent', () => {
  let component: AddInBasketComponent;
  let fixture: ComponentFixture<AddInBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
