import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylizerComponent } from './stylizer.component';

describe('StylizerComponent', () => {
  let component: StylizerComponent;
  let fixture: ComponentFixture<StylizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylizerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
