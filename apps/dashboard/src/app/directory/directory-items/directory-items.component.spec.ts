import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryItemsComponent } from './directory-items.component';

describe('DirectoryItemsComponent', () => {
  let component: DirectoryItemsComponent;
  let fixture: ComponentFixture<DirectoryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectoryItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
