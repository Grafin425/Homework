import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  const;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    age: new FormControl('', Validators.required)
  });

  Submit(): any {

  }
}
