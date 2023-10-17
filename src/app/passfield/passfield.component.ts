import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passfield',
  templateUrl: './passfield.component.html',
  styleUrls: ['./passfield.component.css']
})
export class PassfieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  onPasswordChange(event : Event) {
    const passwordValue = (event.target as HTMLInputElement).value;
    console.log(passwordValue);
  }

}
