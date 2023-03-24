import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CharacterCardComponent } from './card-character/card-character.component';
import { CardComicComponent } from './card-comic/card-comic.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CharacterCardComponent,
    CardComicComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    CharacterCardComponent,
    CardComicComponent
  ]
})
export class ComponentsModule { }
