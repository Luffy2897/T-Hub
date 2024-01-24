import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEmbeddedExpertComponent } from './it-embedded-expert.component';

describe('ItEmbeddedExpertComponent', () => {
  let component: ItEmbeddedExpertComponent;
  let fixture: ComponentFixture<ItEmbeddedExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItEmbeddedExpertComponent]
    });
    fixture = TestBed.createComponent(ItEmbeddedExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
