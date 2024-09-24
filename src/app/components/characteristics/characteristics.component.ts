import { Component } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  standalone: true,
  imports: [],
  templateUrl: './characteristics.component.html',
  styleUrl: './characteristics.component.scss'
})
export class CharacteristicsComponent {

  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onCollapseShown() {
    this.isCollapsed = false;
  }

  onCollapseHidden() {
    this.isCollapsed = true;
  }

}
