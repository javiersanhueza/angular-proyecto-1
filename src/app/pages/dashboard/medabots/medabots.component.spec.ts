import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedabotsComponent } from './medabots.component';

describe('MedabotsComponent', () => {
  let component: MedabotsComponent;
  let fixture: ComponentFixture<MedabotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedabotsComponent]
    });
    fixture = TestBed.createComponent(MedabotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
