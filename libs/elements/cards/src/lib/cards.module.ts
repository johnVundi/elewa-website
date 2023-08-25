import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaNewsItemCardComponent } from './elewa-news-item-card/elewa-news-item-card.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ElewaInfoCardComponent, ElewaNewsItemCardComponent],
  exports: [ElewaInfoCardComponent, ElewaNewsItemCardComponent],
})
export class CardsModule {}
