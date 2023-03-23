import { Component } from '@angular/core';
import { COMPONENTS } from '@constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listUrl = '/' + COMPONENTS.LIST
}
