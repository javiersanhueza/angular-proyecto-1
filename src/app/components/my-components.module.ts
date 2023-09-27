import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import localeEsCl from "@angular/common/locales/es-CL";

import { MyComponent1Component } from "./my-component1/my-component1.component";
import { MyComponent2Component } from "./my-component2/my-component2.component";
import { MyComponent3Component } from "./my-component3/my-component3.component";
import { HerosComponent } from "./heros/heros.component";
import { MyComponent4Component } from "./my-component4/my-component4.component";

registerLocaleData(localeEsCl);
@NgModule({
  declarations: [
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component,
    MyComponent4Component,
    HerosComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-CL" }],
  imports: [CommonModule],
  exports: [MyComponent1Component, MyComponent2Component, MyComponent3Component, HerosComponent]
})
export class MyComponentsModule {}
