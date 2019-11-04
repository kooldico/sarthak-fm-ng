import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietrailorComponent } from './movietrailor.component';

describe('MovietrailorComponent', () => {
  let component: MovietrailorComponent;
  let fixture: ComponentFixture<MovietrailorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietrailorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietrailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
