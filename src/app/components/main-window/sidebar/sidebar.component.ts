import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';

import { MysqlService } from '../../../services/mysql.service';
import { CreatureHandlerService } from '../../../services/handlers/creature-handler.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent {

  menuStates: { [key: string]: 'down'|'up' } = {
    creature: 'down',
  };

  constructor(
    public sidebarService: SidebarService,
    public mysqlService: MysqlService,
    public creatureHandlerService: CreatureHandlerService,
  ) {
   }

  getSideBarState() {
    return this.sidebarService.getSidebarState();
  }

  toggleSidebar() {
    this.sidebarService.setSidebarState(!this.sidebarService.getSidebarState());
  }

  hasBackgroundImage() {
    return this.sidebarService.hasBackgroundImage;
  }

  getStyle(): string {
    return `background-image: url(assets/img/bg1.jpg);`;
    // return this.hasBackgroundImage() ? `background-image: 'assets/img/bg1.jpg';` : '';
  }

  toggleState(key: string) {
    this.menuStates[key] = this.menuStates[key] === 'up' ? 'down' : 'up';
  }
}
