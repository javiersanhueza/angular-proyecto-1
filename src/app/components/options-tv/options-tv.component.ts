import { Component, Input } from '@angular/core';
import { ColorEvent } from 'ngx-color';

import { ITv } from '../../common/models/tv.interface';
import { ColorsTv, ResolutionsTV, SizesTV } from '../../common/models/tv.type';
import { CalculateService } from '../../common/services/calculate.service';

@Component({
  selector: 'app-options-tv',
  templateUrl: './options-tv.component.html',
  styleUrls: ['./options-tv.component.scss'],
  providers: [CalculateService]
})
export class OptionsTvComponent {
  @Input() isDisabled = false;

  colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
  sizes: SizesTV[] = ['10 pulgadas', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
  resolutions: ResolutionsTV[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
  optionsTv: ITv = <ITv>{};
  color = 'black';

  constructor(private calculateService: CalculateService) {}

  handleChangeComplete($event: ColorEvent) {
    this.color = $event.color.hex;
    this.optionsTv.color = $event.color.hex as ColorsTv;
    this.sendOptionsTv();
  }

  changeTamanio(): void {
    this.sendOptionsTv();
  }

  changeResolution(): void {
    this.sendOptionsTv();
  }

  private sendOptionsTv() {
    this.calculateService.setOptionsTv(this.optionsTv);
  }
}
