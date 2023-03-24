import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from '@models/character';
import { ApiService } from '@services/api.service';
import { Subject, take, takeUntil, debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  characterList: Character[] = []
  filteredCharactersList: Character[] = []
  searchNameInput = new FormControl()
  filtered: boolean = false // To check if a search has been made and no results returned
  loadingData: boolean = true
  searchResultsCount = 0
  searchResultsLimit = 20
  searchResultsOffset = 0
  searchResultsTotal = 0

  private destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadInitalHeroList()
    this.initializeSearchNameInput()
  }

  public onScroll() {
    this.loadExtraResults()
  }

  private loadExtraResults() {
    this.loadingData = true
    if (!this.filtered) {
      this.apiService.getCharactersList(this.searchResultsLimit, this.searchResultsOffset).pipe(takeUntil(this.destroy$), debounceTime(5000)).subscribe(characterDataWrapper => {
        this.searchResultsCount = characterDataWrapper.count
        this.searchResultsTotal = characterDataWrapper.total
        this.searchResultsOffset += characterDataWrapper.limit
        console.log(characterDataWrapper)
        characterDataWrapper.results.forEach(character => { this.characterList.push(character) })
        this.loadingData = false
      })
    }
    else if (this.filtered) {
      this.loadExtraFilteredResults()
    }
  }

  private loadExtraFilteredResults() {

  }

  private resetFilteredList(): void {
    this.filteredCharactersList = []
    this.filtered = false
  }

  private loadInitalHeroList(): void {
    this.loadingData = true;
    this.apiService.getCharactersList(this.searchResultsLimit, 0).pipe(take(1)).subscribe(characterDataWrapper => {
      this.searchResultsCount = characterDataWrapper.count
      this.searchResultsTotal = characterDataWrapper.total
      this.searchResultsOffset += characterDataWrapper.limit
      this.characterList = characterDataWrapper.results
      this.loadingData = false;
    })
  }

  private initializeSearchNameInput(): void {
    this.searchNameInput.valueChanges.subscribe(partialSearch => {
      (partialSearch && partialSearch.length >= 3) ? this.filterListNameStartsWith(partialSearch) : this.resetFilteredList()
    })
  }

  private filterListNameStartsWith(partialName: string): void {
    this.searchResultsOffset = 0
    this.loadingData = true;
    this.apiService.getCharactersFilteredListByStartsWith(this.searchResultsLimit, this.searchResultsOffset, partialName).pipe(takeUntil(this.destroy$), debounceTime(5000)).subscribe(
      characterDataWrapper => {
        console.log(characterDataWrapper)
        this.searchResultsCount = characterDataWrapper.count
        this.searchResultsTotal = characterDataWrapper.total
        this.searchResultsOffset += characterDataWrapper.limit
        this.filteredCharactersList = characterDataWrapper.results
        this.filtered = true
        this.loadingData = false;
      }
    )
  }
  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.complete()
  }
}
