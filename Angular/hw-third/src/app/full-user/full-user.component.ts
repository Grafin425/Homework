import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  id: number;


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => this.id = id);
  }

  ngOnInit(): void {
  }

}
