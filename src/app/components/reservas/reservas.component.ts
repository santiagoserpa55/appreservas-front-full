
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { Reservas } from 'src/app/models/Reservas';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule],
})
export class ReservasComponent implements OnInit, AfterViewInit {
deleteReserva(_t127: any) {
throw new Error('Method not implemented.');
}

  reservas: Reservas[] = [];

  displayedColumns: string[] = ['Nombres', 'Apellidos', 'Tipo de documento', 'Identificación', 'Email', 'Fecha de reserva',
    'Tipo de reserva', 'Cantidad de personas', 'Estado', 'Acciones',
  ];

  dataSource!: MatTableDataSource<Reservas>;

  constructor(public reservaService: ReservaService, private router: Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  ngOnInit(): void { this.getReservas(); }

  getReservas() {
    this.reservaService.getReservas().subscribe((response) => {
      this.reservas = response;
      this.dataSource = new MatTableDataSource<Reservas>(this.reservas);
      console.log(this.reservas);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {}

  //desde aqui paso el param al component edit-reservas.component.ts
  editarReserva(identificacion: string) {
    this.router.navigate(["/edit-reservas"], {queryParams:{identificacion: identificacion}})
  }

  volver() {
    this.router.navigate([""]);
  }

}


