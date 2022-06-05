import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoSComponent } from './registo-s.component';

describe('RegistoSComponent', () => {
  let component: RegistoSComponent;
  let fixture: ComponentFixture<RegistoSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistoSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
