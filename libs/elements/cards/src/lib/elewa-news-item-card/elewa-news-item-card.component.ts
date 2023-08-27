import { Component, Input, OnInit} from '@angular/core';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';
import { __highlightedNews } from '@elewa-website/data/sections/highlighted-news'
@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent implements OnInit{
  @Input() newsData!: NewsItem;

  newsItem: NewsItem[]=[];
  ngOnInit(): void {
    this.newsItem = __highlightedNews;
  }

}
