import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.scss"]
})
export class HerosComponent implements OnInit, AfterViewInit {
  @ViewChild("miH1") miH1: ElementRef | undefined;
  title = "Hello World";
  disableInput = true;
  color = "blue";

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title = "Hello Javier";
      this.disableInput = false;
    }, 1500);

    console.log(this.miH1);
  }

  getSuma(num1: number, num2: number): number {
    return num1 + num2;
  }

  ngAfterViewInit(): void {
    console.log(this.miH1);
    // this.miH1?.nativeElement.innerText = 'Hola mundo';
  }

  showMessage(): void {
    console.log("mensaje");
  }

  keyUp(event: KeyboardEvent) {
    this.title = event.key;
  }

  getMaxLength() {
    return 20;
  }

  getChangeColor() {
    return this.title === "Hello World";
  }
}
