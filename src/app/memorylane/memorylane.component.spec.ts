import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorylaneComponent } from './memorylane.component';

describe('MemorylaneComponent', () => {
  let component: MemorylaneComponent;
  let fixture: ComponentFixture<MemorylaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorylaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorylaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
