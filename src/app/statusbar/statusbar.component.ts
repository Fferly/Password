import { Component} from '@angular/core';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})

export class StatusbarComponent {
  constructor() {}

  public backgroundColor = 'gray';

  public setBackgroundColor(color : string) {
    this.backgroundColor = color;
  }
}
