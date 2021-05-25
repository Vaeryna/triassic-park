import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDinoComponent } from './type-dino.component';

describe('TypeDinoComponent', () => {
  let component: TypeDinoComponent;
  let fixture: ComponentFixture<TypeDinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
