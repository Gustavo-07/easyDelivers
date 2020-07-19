import { Component, OnInit } from '@angular/core';
import { menuOptions } from 'src/types/types';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  opcionMenu: menuOptions = 'inicio';

  constructor() { }

  ngOnInit() {
  }

  verOpcion(event: menuOptions) {
    this.opcionMenu = event;
  }

}
