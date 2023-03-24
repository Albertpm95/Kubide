import { Component, Input } from '@angular/core';
import { Comic } from '@models/comic';
import { environments } from 'environments/environments';

@Component({
  selector: 'app-card-comic',
  templateUrl: './card-comic.component.html',
  styleUrls: ['./card-comic.component.scss']
})
export class CardComicComponent {

  @Input() comic: Comic | undefined
  thumbnailUrl: string = ''

  constructor() { }

  ngOnInit() {
    console.log(this.comic)
    this.thumbnailUrl = this.comic?.thumbnail.path + '/portrait_medium.' + this.comic?.thumbnail.extension
  }

  public openExternalUrl(externalUrl: string): void {
    window.open(externalUrl, environments.PUBKEY, "_blank");
  }
}
