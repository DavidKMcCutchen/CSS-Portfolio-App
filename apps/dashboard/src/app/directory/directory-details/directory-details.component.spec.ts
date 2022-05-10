import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryDetailsComponent } from './directory-details.component';

describe('DirectoryDetailsComponent', () => {
  let component: DirectoryDetailsComponent;
  let fixture: ComponentFixture<DirectoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectoryDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
