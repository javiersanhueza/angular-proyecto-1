import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MyComponent4Component } from "./my-component4.component";

describe("MyComponent4Component", () => {
  let component: MyComponent4Component;
  let fixture: ComponentFixture<MyComponent4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent4Component]
    });
    fixture = TestBed.createComponent(MyComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
