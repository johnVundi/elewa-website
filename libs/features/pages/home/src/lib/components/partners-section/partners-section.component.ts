import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';


@Component({
  selector: 'elewa-website-partners-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss'],
})

export class PartnersSectionComponent {

  highlightedNews: NewsItem = {
    title: 'Conversational learning ipsum dolar',
    description: 'Eos qui ratione voluptatem sequi nesciunt.',
    buttonText: 'Read more',
  };

  highlightedNewsArray: NewsItem[] = Array(3).fill(this.highlightedNews);
}


