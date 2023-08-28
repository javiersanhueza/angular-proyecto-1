import {
  AfterContentInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-my-component2",
  templateUrl: "./my-component2.component.html",
  styleUrls: ["./my-component2.component.scss"]
})
export class MyComponent2Component implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @ContentChild("childComponent2") contentChild: HTMLElement | undefined;
  ngAfterContentInit(): void {
    console.log("**ngAfterContentInit COMPONENTE 2**");
    console.log(this.contentChild);
  }

  ngDoCheck(): void {
    console.log("**ngDoCheck COMPONENTE 2**");
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    console.log(this.contentChild);
    console.log("**ngOnInit COMPONENTE 2**");
  }
}
