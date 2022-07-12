import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByCategoryComponent } from './view-by-category.component';

describe('ViewByCategoryComponent', () => {
  let component: ViewByCategoryComponent;
  let fixture: ComponentFixture<ViewByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
