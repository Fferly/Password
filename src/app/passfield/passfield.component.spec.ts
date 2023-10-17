import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassfieldComponent } from './passfield.component';

describe('PassfieldComponent', () => {
  let component: PassfieldComponent;
  let fixture: ComponentFixture<PassfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassfieldComponent]
    });
    fixture = TestBed.createComponent(PassfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
