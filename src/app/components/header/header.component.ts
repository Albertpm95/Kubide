import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { COMPONENTS, MODULES } from '@constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  characterListRoute = MODULES.CHARACTER + '/' + COMPONENTS.LIST

  constructor(private router: Router) { }

  goToCharacterList() {
    this.router.navigate([this.characterListRoute])
  }
}
