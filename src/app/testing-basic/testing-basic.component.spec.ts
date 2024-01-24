import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingBasicComponent } from './testing-basic.component';

describe('TestingBasicComponent', () => {
  let component: TestingBasicComponent;
  let fixture: ComponentFixture<TestingBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingBasicComponent]
    });
    fixture = TestBed.createComponent(TestingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
