import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAdvanceComponent } from './process-advance.component';

describe('ProcessAdvanceComponent', () => {
  let component: ProcessAdvanceComponent;
  let fixture: ComponentFixture<ProcessAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessAdvanceComponent]
    });
    fixture = TestBed.createComponent(ProcessAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
