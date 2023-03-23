import { Component, Input } from '@angular/core';
import { Character } from '@models/character';

@Component({
  selector: 'card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CharacterCardComponent {

  @Input() character: Character | undefined

  thumbnailUrl: string = ''

  ngOnInit() {
    if (this.character && this.character.thumbnail)
      this.thumbnailUrl = this.character.thumbnail.path + '.' + this.character.thumbnail.extension
  }
}
