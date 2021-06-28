import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionBackComponent } from './admin-page.component';

describe('ConnexionBackComponent', () => {
  let component: ConnexionBackComponent;
  let fixture: ComponentFixture<ConnexionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
