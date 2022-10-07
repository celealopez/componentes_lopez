import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjAngularMaterialComponent } from './ej-angular-material.component';

describe('EjAngularMaterialComponent', () => {
  let component: EjAngularMaterialComponent;
  let fixture: ComponentFixture<EjAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjAngularMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
