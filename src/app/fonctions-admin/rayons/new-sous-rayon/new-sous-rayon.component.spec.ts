import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSousRayonComponent } from './new-sous-rayon.component';

describe('NewSousRayonComponent', () => {
  let component: NewSousRayonComponent;
  let fixture: ComponentFixture<NewSousRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSousRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSousRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
