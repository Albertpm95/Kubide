import { Component } from '@angular/core';
import { Character } from '@models/character';
import { ApiService } from '@services/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  characterList: Character[] = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCHARACTEResList().subscribe((response) => {
      this.characterList = response
    })
  }

  onScroll() {
    console.log('Scrolled')
  }

}
