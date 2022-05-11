import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDenseComponent } from './css-dense.component';

describe('CssDenseComponent', () => {
  let component: CssDenseComponent;
  let fixture: ComponentFixture<CssDenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssDenseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssDenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
