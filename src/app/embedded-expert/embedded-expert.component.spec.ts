import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedExpertComponent } from './embedded-expert.component';

describe('EmbeddedExpertComponent', () => {
  let component: EmbeddedExpertComponent;
  let fixture: ComponentFixture<EmbeddedExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedExpertComponent]
    });
    fixture = TestBed.createComponent(EmbeddedExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
