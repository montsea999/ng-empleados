export class Employee {
  id: number;
  name: string;
  lastName: string;
  departamento: string;
  salary: number;

  constructor(i: number, n: string, l: string, g: string, s: number) {
    this.id = i;
    this.name = n;
    this.lastName = l;
    this.departamento = g;
    this.salary = s;
  }
}
