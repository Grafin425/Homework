import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Users} from './db/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  users = Users;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  age = new FormControl('', Validators.required);
  form = new FormGroup({
    name: this.name,
    age: this.age
  });

  Submit(): any {
    this.users.push({name: this.name.value, age: this.age.value});
    console.log(this.users);
  }
}
