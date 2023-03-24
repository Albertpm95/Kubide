import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@models/character';
import { Comic } from '@models/comic';
import { DataContainer, DataWrapper } from '@models/metadata';
import { ApiService } from '@services/api.service';
import { environments } from 'environments/environments';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  loading: boolean = true
  character: Character | undefined
  thumbnailUrl: string = ''

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const characterID = this.activatedRoute.snapshot.params['characterID']
    if (characterID) {
      this.loadCharacterData(characterID)
    }
  }

  private loadCharacterData(characterID: number): void {
    this.apiService.getCharacterById(characterID).subscribe((characterData: DataContainer) => {
      this.character = characterData.results[0] as Character
      this.thumbnailUrl = this.character.thumbnail.path + '.' + this.character.thumbnail.extension
      if (this.character) {
        this.loadComicData(characterID)
      }
    })
  }

  private loadComicData(characterID: number): void {
    if (this.character && characterID) {
      this.apiService.getCharacterComicsById(characterID).subscribe(comicData => {
        this.character!.comics = comicData.results as Comic[]
        this.loading = false
      })
    }
  }
  public openExternalUrl(externalUrl: string): void {
    window.open(externalUrl, environments.PUBKEY, "_blank");
  }
}
