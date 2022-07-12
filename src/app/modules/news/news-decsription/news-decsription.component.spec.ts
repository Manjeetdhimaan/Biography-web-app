import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDecsriptionComponent } from './news-decsription.component';

describe('NewsDecsriptionComponent', () => {
  let component: NewsDecsriptionComponent;
  let fixture: ComponentFixture<NewsDecsriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDecsriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDecsriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
