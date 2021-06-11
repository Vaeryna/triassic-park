import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienBddAuthComponent } from './lien-bdd-auth.component';

describe('LienBddAuthComponent', () => {
  let component: LienBddAuthComponent;
  let fixture: ComponentFixture<LienBddAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienBddAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienBddAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
