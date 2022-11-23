import { Employee } from './../../models/Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  //creo una variable de tipo EmployeeList que sera de tipo Employee y sera un array
  employeeList: Employee[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Mas',
      departamento: 'IT',
      salary: 24000,
    },
    {
      id: 2,
      name: 'Alba',
      lastName: 'García',
      departamento: 'Administrativo',
      salary: 19000,
    },
    {
      id: 3,
      name: 'Jorge',
      lastName: 'Serrano',
      departamento: 'Comercial',
      salary: 24000,
    },
    {
      id: 4,
      name: 'Olga',
      lastName: 'Gutiérrez',
      departamento: 'Administrativo',
      salary: 16000,
    },
    {
      id: 5,
      name: 'Ana',
      lastName: 'Grau',
      departamento: 'Administrativo',
      salary: 17000,
    },
    {
      id: 6,
      name: 'Ricardo',
      lastName: 'Sanchez',
      departamento: 'Comercial',
      salary: 20000,
    },
    {
      id: 7,
      name: 'Oscar',
      lastName: 'Rodríguez',
      departamento: 'Comercial',
      salary: 23000,
    },
    {
      id: 8,
      name: 'Luis',
      lastName: 'Serrana',
      departamento: 'Comercial',
      salary: 26500,
    },
    {
      id: 9,
      name: 'Laia',
      lastName: 'Peralta',
      departamento: 'Directivo',
      salary: 48000,
    },
    {
      id: 10,
      name: 'Javier',
      lastName: 'Díaz',
      departamento: 'Comercial',
      salary: 23000,
    },
    {
      id: 11,
      name: 'Daniel',
      lastName: 'Romeo',
      departamento: 'IT',
      salary: 18000,
    },
    {
      id: 12,
      name: 'Oscar',
      lastName: 'López',
      departamento: 'Administrativo',
      salary: 18000,
    },
    {
      id: 13,
      name: 'Javier',
      lastName: 'García',
      departamento: 'Comercial',
      salary: 22000,
    },
    {
      id: 14,
      name: 'Laura',
      lastName: 'Velázquez',
      departamento: 'Directivo',
      salary: 48000,
    },
    {
      id: 15,
      name: 'Sandra',
      lastName: 'Ramos',
      departamento: 'Administrativo',
      salary: 16000,
    },
    {
      id: 16,
      name: 'Sandra',
      lastName: 'Lorenzo',
      departamento: 'Juridico',
      salary: 22000,
    },
    {
      id: 17,
      name: 'Manuel',
      lastName: 'Rodríguez',
      departamento: 'Mantenimiento',
      salary: 25000,
    },
    {
      id: 18,
      name: 'Sandra',
      lastName: 'Ramos',
      departamento: 'Juridico',
      salary: 21500,
    },
    {
      id: 19,
      name: 'Sol',
      lastName: 'Rodríguez',
      departamento: 'Administrativo',
      salary: 16000,
    },
    {
      id: 20,
      name: 'Luis',
      lastName: 'Rodríguez',
      departamento: 'Mantenimiento',
      salary: 23000,
    },
  ];

  radioBtnSelected: string = 'Todos'; //gracias al banana in box, almacenara el valor
  //del input seleccionado 'Todos'|'Administrativo'|'Comercial' cuando el usuario lo marque

  constructor() {}

  ngOnInit(): void {}

  countEmployees(): number {
    return this.employeeList.length;
  }

  countAdministrativo() {
    return this.employeeList.filter((l) => l.departamento === 'Administrativo')
      .length;
  }

  countComercial() {
    return this.employeeList.filter((l) => l.departamento === 'Comercial')
      .length;
  }

  countDirectivo() {
    return this.employeeList.filter((l) => l.departamento === 'Directivo')
      .length;
  }

  countIT() {
    return this.employeeList.filter((l) => l.departamento === 'IT').length;
  }

  countMantenimiento() {
    return this.employeeList.filter((l) => l.departamento === 'Mantenimiento')
      .length;
  }

  countJuridico() {
    return this.employeeList.filter((l) => l.departamento === 'Juridico')
      .length;
  }

  changebutton(changeR: string): void {
    this.radioBtnSelected = changeR;
  }
}
