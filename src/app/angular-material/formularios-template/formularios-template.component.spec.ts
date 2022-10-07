import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosTemplateComponent } from './formularios-template.component';

describe('FormulariosTemplateComponent', () => {
  let component: FormulariosTemplateComponent;
  let fixture: ComponentFixture<FormulariosTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
