import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MyComponent1Component } from "./components/my-component1/my-component1.component";
import { MyComponent2Component } from "./components/my-component2/my-component2.component";

@NgModule({
  declarations: [AppComponent, MyComponent1Component, MyComponent2Component],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
