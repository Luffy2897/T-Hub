import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalExpertComponent } from './electrical-expert.component';

describe('ElectricalExpertComponent', () => {
  let component: ElectricalExpertComponent;
  let fixture: ComponentFixture<ElectricalExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricalExpertComponent]
    });
    fixture = TestBed.createComponent(ElectricalExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
