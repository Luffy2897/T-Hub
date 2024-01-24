import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessIntermediateComponent } from './process-intermediate.component';

describe('ProcessIntermediateComponent', () => {
  let component: ProcessIntermediateComponent;
  let fixture: ComponentFixture<ProcessIntermediateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessIntermediateComponent]
    });
    fixture = TestBed.createComponent(ProcessIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
