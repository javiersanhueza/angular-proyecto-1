import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HerosDirectivasEstructuralesComponent } from "./heros-directivas-estructurales.component";

describe("HerosDirectivasEstructuralesComponent", () => {
  let component: HerosDirectivasEstructuralesComponent;
  let fixture: ComponentFixture<HerosDirectivasEstructuralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerosDirectivasEstructuralesComponent]
    });
    fixture = TestBed.createComponent(HerosDirectivasEstructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
