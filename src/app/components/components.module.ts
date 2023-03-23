import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CharacterCardComponent } from './card-character/card-character.component';




@NgModule({
  declarations: [
    HeaderComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    CharacterCardComponent
  ]
})
export class ComponentsModule { }
