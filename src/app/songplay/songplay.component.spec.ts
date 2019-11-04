import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongplayComponent } from './songplay.component';

describe('SongplayComponent', () => {
  let component: SongplayComponent;
  let fixture: ComponentFixture<SongplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
