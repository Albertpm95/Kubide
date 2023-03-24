import { Component, Input } from '@angular/core';
import { COMPONENTS, MODULES } from '@constants';
import { Character } from '@models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CharacterCardComponent {


  @Input() character: Character | undefined

  thumbnailUrl: string = ''
  characterDetailsRoute: string = '/' + MODULES.CHARACTER + '/' + COMPONENTS.DETAILS

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.character && this.character.thumbnail)
      this.thumbnailUrl = this.character.thumbnail.path + '.' + this.character.thumbnail.extension
  }

  goToCharacterDetails(characterID: number) {
    this.router.navigate([this.characterDetailsRoute, { characterID: characterID }])
  }
}
