import { Component, OnInit,ViewChild } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';

@Component({
  selector: 'app-passfield',
  templateUrl: './passfield.component.html',
  styleUrls: ['./passfield.component.css']
})

export class PassfieldComponent implements OnInit {

  ngOnInit(): void {}
  
  @ViewChild('easy')   easySection!:   StatusbarComponent;
  @ViewChild('medium') mediumSection!: StatusbarComponent;
  @ViewChild('high')   highSection!:   StatusbarComponent;


  onPasswordChange(event : Event) {
    const passwordValue = (event.target as HTMLInputElement).value;
    const passwordType = this.checkPasswordType(passwordValue);

    switch(passwordType) {
      case PasswordType.EMPTY:
        console.log('empty');
        this.runEmptyScenario();
        break;
      case PasswordType.SHORT:
        console.log('short');
        this.runShortScenario();
        break;
      case PasswordType.EASY:
        console.log('easy');
        this.runEasyScenario();
        break;
      case PasswordType.MEDIUM:
        console.log('medium');
        this.runMediumScenario();
        break;
      case PasswordType.HIGH:
        console.log('high');
        this.runHighScenario();
        break;
    }
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

  runEmptyScenario() {
    this.easySection.setBackgroundColor(Color.GRAY);
    this.mediumSection.setBackgroundColor(Color.GRAY);
    this.highSection.setBackgroundColor(Color.GRAY);
  }

  runShortScenario() {
    this.easySection.setBackgroundColor(Color.RED);
    this.mediumSection.setBackgroundColor(Color.RED);
    this.highSection.setBackgroundColor(Color.RED);
  }
  
  runEasyScenario() {
    this.easySection.setBackgroundColor(Color.RED);
    this.mediumSection.setBackgroundColor(Color.GRAY);
    this.highSection.setBackgroundColor(Color.GRAY);
  }
  
  runMediumScenario() {
    this.easySection.setBackgroundColor(Color.YELLOW);
    this.mediumSection.setBackgroundColor(Color.YELLOW);
    this.highSection.setBackgroundColor(Color.GRAY);
  }
  
  runHighScenario() {
    this.easySection.setBackgroundColor(Color.GREEN);
    this.mediumSection.setBackgroundColor(Color.GREEN);
    this.highSection.setBackgroundColor(Color.GREEN);
  }
}

enum PasswordType {
  EMPTY,
  SHORT,
  EASY,
  MEDIUM,
  HIGH
}

enum Color {
  GRAY   = 'gray',
  RED    = 'red',
  YELLOW = 'yellow',
  GREEN  = 'green'
}
