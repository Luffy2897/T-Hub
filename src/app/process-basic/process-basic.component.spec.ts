import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessBasicComponent } from './process-basic.component';

describe('ProcessBasicComponent', () => {
  let component: ProcessBasicComponent;
  let fixture: ComponentFixture<ProcessBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessBasicComponent]
    });
    fixture = TestBed.createComponent(ProcessBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
