import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.css'],
})
export class CountEmployeeComponent implements OnInit {
  @Input() todos!: number;
  @Input() Administrativo!: number;
  @Input() Comercial!: number;
  @Input() Directivo!: number;
  @Input() IT!: number;
  @Input() Juridico!: number;
  @Input() Mantenimiento!: number;

  @Output() radioBtnChange = new EventEmitter<string>();

  radioBtnSelected: string = 'Todos'; //gracias al banana in box, almacenara el valor
  //del input seleccionado 'Todos'|'Administrativo'|'Comercial' cuando el usuario lo marque

  constructor() {}
  ngOnInit(): void {}

  onChange(): void {
    this.radioBtnChange.emit(this.radioBtnSelected); //pasamos por parametro lo q emitira(valor d radioBtnSelected)
  }
  //como debe ejecutarse cada vez que el usuario marque el radio, añado un event binding en los botones del html del c hijo
}
