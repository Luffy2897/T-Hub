import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessExpertComponent } from './process-expert.component';

describe('ProcessExpertComponent', () => {
  let component: ProcessExpertComponent;
  let fixture: ComponentFixture<ProcessExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessExpertComponent]
    });
    fixture = TestBed.createComponent(ProcessExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
