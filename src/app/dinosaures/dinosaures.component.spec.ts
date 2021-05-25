import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauresComponent } from './dinosaures.component';

describe('DinosauresComponent', () => {
  let component: DinosauresComponent;
  let fixture: ComponentFixture<DinosauresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosauresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosauresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
