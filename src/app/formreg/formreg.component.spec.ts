import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormregComponent } from './formreg.component';

describe('FormregComponent', () => {
  let component: FormregComponent;
  let fixture: ComponentFixture<FormregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormregComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
