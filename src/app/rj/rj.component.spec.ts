import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RJComponent } from './rj.component';

describe('RJComponent', () => {
  let component: RJComponent;
  let fixture: ComponentFixture<RJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
