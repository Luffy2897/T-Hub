import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEmbeddedIntermediateComponent } from './it-embedded-intermediate.component';

describe('ItEmbeddedIntermediateComponent', () => {
  let component: ItEmbeddedIntermediateComponent;
  let fixture: ComponentFixture<ItEmbeddedIntermediateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItEmbeddedIntermediateComponent]
    });
    fixture = TestBed.createComponent(ItEmbeddedIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
