import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEmbeddedAdvanceComponent } from './it-embedded-advance.component';

describe('ItEmbeddedAdvanceComponent', () => {
  let component: ItEmbeddedAdvanceComponent;
  let fixture: ComponentFixture<ItEmbeddedAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItEmbeddedAdvanceComponent]
    });
    fixture = TestBed.createComponent(ItEmbeddedAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
