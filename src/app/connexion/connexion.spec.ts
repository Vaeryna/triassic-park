import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteClientComponent } from './connexion';

describe('CompteClientComponent', () => {
  let component: CompteClientComponent;
  let fixture: ComponentFixture<CompteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
