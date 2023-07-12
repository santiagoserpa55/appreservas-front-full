import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Reservas } from 'src/app/models/Reservas';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-edit-reservas',
  templateUrl: './edit-reservas.component.html',
  styleUrls: ['./edit-reservas.component.css']
})

export class EditReservasComponent implements OnInit {
  editFormUser!: FormGroup;
  editFormReserva!: FormGroup;
  reservas: Reservas[] = [];
  id!: string;

  constructor(private formBuilder: FormBuilder,
    public reservaService: ReservaService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.editFormUser = this.formBuilder.group({
      tipoDocumento: [''],
      identificacion: ['', Validators.required],
      nombres: ['',Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.email],
    });

    this.editFormReserva = this.formBuilder.group({
      fechaReserva: ['', Validators.required],
      tipoReserva: ['', Validators.required],
      cantidadPersonas: ['', Validators.required],
      estado: ['', Validators.required],
      observaciones: ['', Validators.required]
    });


    //este param es recibido desde la lista de reservas -> 
    this.route.queryParams.subscribe((param) => {
      const identificacion = param['identificacion'];      
      this.edit(identificacion);
    });
  }

  //cargamos la info de user-reserva para editar
  edit(id: string) {
    this.reservaService.getReservasById(id).subscribe((response) => {      
      this.reservas = response;
      console.log(this.reservas);
      const establecerValorDefectoTipoDoc = this.reservas[0].tipo_documento;
      const establecerValorDefectoTipoRes = this.reservas[0].tipo_reserva;
  
      this.editFormUser.patchValue({
        tipoDocumento: establecerValorDefectoTipoDoc,
        identificacion: this.reservas[0].identificacion,
        nombres: this.reservas[0].nombres,
        apellidos: this.reservas[0].apellidos,
        email: this.reservas[0].email
      });
      this.editFormReserva.patchValue({
        fechaReserva: this.reservas[0].fecha_reserva,
        tipoReserva: this.reservas[0].tipo_reserva,
        cantidadPersonas: this.reservas[0].cantidad_personas,
        estado: this.reservas[0].estado,
        observaciones: this.reservas[0].observaciones
      });
    });
  }
  
  confirmar() {

  }

  editUsuario() {

  }

}
