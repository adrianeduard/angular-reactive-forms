import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personForm.valueChanges.subscribe((person) => console.log(person));
  }

  personForm = this._formBuilder.group({
    name: '',
    lastName: '',
    age: 0,
  });

  submit(form: FormGroup) {
    console.log(form.value);
  }
}
