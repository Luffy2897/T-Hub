import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingAdvanceComponent } from './testing-advance.component';

describe('TestingAdvanceComponent', () => {
  let component: TestingAdvanceComponent;
  let fixture: ComponentFixture<TestingAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingAdvanceComponent]
    });
    fixture = TestBed.createComponent(TestingAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
