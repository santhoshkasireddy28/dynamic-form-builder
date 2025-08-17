import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormEditerComponent } from './main-form-editer.component';

describe('MainFormEditerComponent', () => {
  let component: MainFormEditerComponent;
  let fixture: ComponentFixture<MainFormEditerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFormEditerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFormEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
