import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingIntermediateComponent } from './testing-intermediate.component';

describe('TestingIntermediateComponent', () => {
  let component: TestingIntermediateComponent;
  let fixture: ComponentFixture<TestingIntermediateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingIntermediateComponent]
    });
    fixture = TestBed.createComponent(TestingIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
