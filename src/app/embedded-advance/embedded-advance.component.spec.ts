import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedAdvanceComponent } from './embedded-advance.component';

describe('EmbeddedAdvanceComponent', () => {
  let component: EmbeddedAdvanceComponent;
  let fixture: ComponentFixture<EmbeddedAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedAdvanceComponent]
    });
    fixture = TestBed.createComponent(EmbeddedAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
