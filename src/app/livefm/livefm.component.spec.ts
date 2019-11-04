import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivefmComponent } from './livefm.component';

describe('LivefmComponent', () => {
  let component: LivefmComponent;
  let fixture: ComponentFixture<LivefmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivefmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivefmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
