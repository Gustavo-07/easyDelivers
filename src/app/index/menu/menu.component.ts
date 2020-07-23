import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() opcion = new EventEmitter<menuOptions>();
  seleccionado: menuOptions = 'pedidos';
  constructor() { }

  ngOnInit() {
  }

  cambiarOpcion(options: menuOptions) {
    this.seleccionado = options;
    this.opcion.emit(options);
  }

}
