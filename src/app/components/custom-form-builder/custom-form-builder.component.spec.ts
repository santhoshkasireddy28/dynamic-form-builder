import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormBuilderComponent } from './custom-form-builder.component';

describe('CustomFormBuilderComponent', () => {
  let component: CustomFormBuilderComponent;
  let fixture: ComponentFixture<CustomFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
