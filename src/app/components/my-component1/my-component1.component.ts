import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-my-component1",
  templateUrl: "./my-component1.component.html",
  styleUrls: ["./my-component1.component.scss"]
})
export class MyComponent1Component implements OnChanges {
  @Input() title = "";
  @Output() sendMessage = new EventEmitter<string>();

  clickSendMessageFather(): void {
    this.sendMessage.emit("Yo soy tu hijo");
  }

  /* Solo funciona con componentes con @Input */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("**COMPONENT-1** -> ngOnChanges");
    console.log(changes);
  }
}
