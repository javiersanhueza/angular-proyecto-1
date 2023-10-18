import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { OptionTvModule } from '../options-tv/options-tv.module';
import { CardTvComponent } from './card-tv.component';

@NgModule({
  declarations: [CardTvComponent],
  imports: [MatCardModule, OptionTvModule, MatButtonModule],
  exports: [CardTvComponent],
  providers: []
})
export class CardTvModule {}
