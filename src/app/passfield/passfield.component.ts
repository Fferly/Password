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
    const passwordType = this.checkPasswordType(passwordValue);
    console.log(passwordType);
  }

  checkPasswordType(password: string) : PasswordType {
    if (password === '') {
      return PasswordType.EMPTY;
    }

    if (password.length < 8) {
      return PasswordType.SHORT;
    }

    /*
      * Now we will check if there is digits, letters or symbols one by one
      * Boolean results will be converted to 0 (if false) or 1 (if true)
      * After we sum up those results, we get a number, that corresponds to number of used groups
      *
      * So, we get something like this
      * 1 - only one group used (EASY)
      * 2 - two groups used (MEDIUM)
      * 3 - three groups used (HIGH)
    */

    const digitRegex  : RegExp = /\d/;
    const letterRegex : RegExp = /[a-zA-Z]/;
    const symbolRegex : RegExp = /[^a-zA-Z\d]/;

    const testResult = Number(digitRegex.test(password)) 
            + Number(letterRegex.test(password)) 
            + Number(symbolRegex.test(password));

    return [PasswordType.EASY, PasswordType.MEDIUM, PasswordType.HIGH][testResult - 1];
  }

  runEmptyScenario() {}
  runShortScenario() {}
  runEasyScenario() {}
  runMediumScenario() {}
  runHighScenario() {}


}

enum PasswordType {
  EMPTY,
  SHORT,
  EASY,
  MEDIUM,
  HIGH
}
