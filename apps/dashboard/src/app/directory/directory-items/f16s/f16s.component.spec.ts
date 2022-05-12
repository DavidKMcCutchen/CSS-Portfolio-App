import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F16sComponent } from './f16s.component';

describe('F16sComponent', () => {
  let component: F16sComponent;
  let fixture: ComponentFixture<F16sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [F16sComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F16sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
