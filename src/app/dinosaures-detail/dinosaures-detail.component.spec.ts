import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauresDetailComponent } from './dinosaures-detail.component';

describe('DinosauresDetailComponent', () => {
  let component: DinosauresDetailComponent;
  let fixture: ComponentFixture<DinosauresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosauresDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosauresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
