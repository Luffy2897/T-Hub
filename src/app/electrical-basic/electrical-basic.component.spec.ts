import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalBasicComponent } from './electrical-basic.component';

describe('ElectricalBasicComponent', () => {
  let component: ElectricalBasicComponent;
  let fixture: ComponentFixture<ElectricalBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricalBasicComponent]
    });
    fixture = TestBed.createComponent(ElectricalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
