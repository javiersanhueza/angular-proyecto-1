import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-heros-directivas-estructurales",
  templateUrl: "./heros-directivas-estructurales.component.html",
  styleUrls: ["./heros-directivas-estructurales.component.scss"]
})
export class HerosDirectivasEstructuralesComponent implements OnInit, AfterViewInit {
  @ViewChild("myButton") myButton: ElementRef<HTMLInputElement> | undefined;
  showButtonSave = false;
  textInput = "";

  myArrayHeroes: IHero[] = [
    {
      id: 1,
      name: "Superman"
    },
    {
      id: 2,
      name: "Batman"
    },
    {
      id: 3,
      name: "Spiderman"
    }
  ];

  heroeSeleccionado: IHero = <IHero>{};
  constructor(private detectChanges: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.myButton);
    setTimeout(() => {
      this.showButtonSave = true;
      this.detectChanges.detectChanges();
      console.log(this.myButton);

      /* if (this.myButton?.nativeElement) {
        this.myButton.nativeElement.innerText = 'Demo ok';
      } */
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log(this.myButton);
  }

  addHero() {
    const idMayor = this.myArrayHeroes.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );
    this.myArrayHeroes.push({
      id: idMayor.id + 1,
      name: this.textInput
    });
  }

  editHero(heroe: IHero) {
    // heroe.name = 'Aquaman';
    this.heroeSeleccionado = heroe;
  }

  modify() {
    this.refrescarHeores();
  }

  trackByHero(hero: IHero) {
    return hero.id;
  }

  private refrescarHeores() {
    this.myArrayHeroes = [
      {
        id: 1,
        name: "SUPERMAN"
      },
      {
        id: 2,
        name: "BATMAN"
      },
      {
        id: 3,
        name: "Spiderman"
      }
    ];
  }
}

interface IHero {
  id: number;
  name: string;
}
