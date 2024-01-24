import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItExpertComponent } from './it-expert.component';

describe('ItExpertComponent', () => {
  let component: ItExpertComponent;
  let fixture: ComponentFixture<ItExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItExpertComponent]
    });
    fixture = TestBed.createComponent(ItExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
