import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyComponent1Component } from "./my-component1/my-component1.component";
import { MyComponent2Component } from "./my-component2/my-component2.component";
import { MyComponent3Component } from "./my-component3/my-component3.component";
import { HerosComponent } from "./heros/heros.component";
import { MyComponent4Component } from "./my-component4/my-component4.component";

@NgModule({
  declarations: [
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component,
    MyComponent4Component,
    HerosComponent
  ],
  imports: [CommonModule],
  exports: [MyComponent1Component, MyComponent2Component, MyComponent3Component, HerosComponent]
})
export class MyComponentsModule {}
