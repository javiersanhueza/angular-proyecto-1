import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from "@angular/core";

import { MyComponent2Component } from "./components/my-component2/my-component2.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(MyComponent2Component) viewChild: MyComponent2Component | undefined;
  title = "proyecto-angular";
  messageHijo = "";
  show = false;

  constructor() {
    console.log("**APP-COMPONENT** -> CONSTRUCTOR");
  }

  getMessage(message: string): void {
    console.log(message);
    this.messageHijo = message;
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('**APP-COMPONENT** -> ngOnChanges');
  } */

  clickChangeTitle(): void {
    this.title = "CAMBIANDO ******";
    this.show = true;
  }

  ngOnInit(): void {
    console.log("**APP-COMPONENT** -> ngOnInit");
    console.log(this.viewChild);
  }

  ngDoCheck(): void {
    console.log("**APP-COMPONENT** -> ngDoCheck");
    console.log(this.viewChild);
  }

  ngAfterViewInit(): void {
    console.log("APP-COMPONENTE -> ngAfterViewInit");
    console.log(this.viewChild);
  }
}
