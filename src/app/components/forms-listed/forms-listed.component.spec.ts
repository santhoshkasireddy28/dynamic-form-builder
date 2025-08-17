import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsListedComponent } from './forms-listed.component';

describe('FormsListedComponent', () => {
  let component: FormsListedComponent;
  let fixture: ComponentFixture<FormsListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsListedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
