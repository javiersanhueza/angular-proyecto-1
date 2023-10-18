import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsTvComponent } from './options-tv.component';

describe('OptionsTvComponent', () => {
  let component: OptionsTvComponent;
  let fixture: ComponentFixture<OptionsTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsTvComponent]
    });
    fixture = TestBed.createComponent(OptionsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
