import { Component, DoCheck, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, DoCheck {
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
  }

  ngDoCheck(): void {
    console.log("**APP-COMPONENT** -> ngDoCheck");
  }
}
