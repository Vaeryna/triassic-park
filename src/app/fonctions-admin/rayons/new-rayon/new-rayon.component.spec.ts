import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRayonComponent } from './new-rayon.component';

describe('NewRayonComponent', () => {
  let component: NewRayonComponent;
  let fixture: ComponentFixture<NewRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
