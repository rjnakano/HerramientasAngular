import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [],
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-success';

  propiedades: Object = {
    danger: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
