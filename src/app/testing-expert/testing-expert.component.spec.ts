import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingExpertComponent } from './testing-expert.component';

describe('TestingExpertComponent', () => {
  let component: TestingExpertComponent;
  let fixture: ComponentFixture<TestingExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingExpertComponent]
    });
    fixture = TestBed.createComponent(TestingExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
