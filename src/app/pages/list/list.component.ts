import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PAGINATION } from '@constants';
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
  searchResultsLimit = PAGINATION.DEFAULT_LIMIT
  searchResultsOffset = PAGINATION.DEFAULT_OFFSET

  private destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadInitalHeroList()
    this.initializeSearchNameInput()
  }


  onScroll() {
    console.log('Scrolled')
  }

  private initializeSearchNameInput(): void {
    this.searchNameInput.valueChanges.subscribe(partialSearch => {
      (partialSearch && partialSearch.length >= 3) ? this.filterListNameStartsWith(partialSearch) : this.resetFilteredList()
    })
  }

  private resetFilteredList(): void {
    this.filteredCharactersList = []
    this.filtered = false
  }

  private loadInitalHeroList(): void {
    this.apiService.getCharactersList().pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.characterList = response
    })
  }

  private filterListNameStartsWith(partialName: string): void {
    this.apiService.getCharactersFilteredListByStartsWith(partialName).pipe(takeUntil(this.destroy$)).subscribe(
      response => {
        this.filteredCharactersList = response
        this.filtered = true
      }
    )
  }
}
