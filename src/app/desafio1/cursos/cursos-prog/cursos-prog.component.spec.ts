import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosProgComponent } from './cursos-prog.component';

describe('CursosProgComponent', () => {
  let component: CursosProgComponent;
  let fixture: ComponentFixture<CursosProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
