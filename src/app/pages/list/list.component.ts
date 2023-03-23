import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from '@models/character';
import { ApiService } from '@services/api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  characterList: Character[] = []
  filteredCharactersList: Character[] = []
  searchNameInput = new FormControl('')
  filtered: boolean = false // To check if a search has been made and no results returned

  private destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadInitalHeroList()
    this.initializeSearchNameInput()
  }


  onScroll() {
    console.log('Scrolled')
  }

  private loadInitalHeroList(): void {
    this.apiService.getCharactersList().pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.characterList = response
    })
  }

  private initializeSearchNameInput(): void {
    this.searchNameInput.valueChanges.subscribe(partialSearch => {
      (partialSearch && partialSearch.length >= 3) ? this.filterListByPartialName(partialSearch) : this.resetFilteredList()
    })
  }

  private resetFilteredList(): void {
    this.filteredCharactersList = []
    this.filtered = false
  }

  private filterListByPartialName(partialSearch: string): void {
    this.filtered = true
    let tempFilteredCharactersList: Character[] = []
    this.characterList.forEach(character => {
      if (character.name.includes(partialSearch)) {
        tempFilteredCharactersList.push(character)
      }
    })
    this.filteredCharactersList = tempFilteredCharactersList
  }

}
