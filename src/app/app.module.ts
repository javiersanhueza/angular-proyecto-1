import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MyComponentsModule } from "./components/my-components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MyComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
