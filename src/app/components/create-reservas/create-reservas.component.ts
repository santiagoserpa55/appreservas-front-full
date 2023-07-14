import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Reservas } from 'src/app/models/Reservas';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-create-reservas',
  templateUrl: './create-reservas.component.html',
  styleUrls: ['./create-reservas.component.css']
})
export class CreateReservasComponent implements OnInit {
  nuevoUsuario: any;
  idUsuarioCreado!: number;
  idArray: any[] = [];
  reserva: any;
  reservas: Reservas[] = [];
  createForm!: FormGroup;
  createFormReservas!: FormGroup;
  showConfirmation: boolean = false;

  constructor(
    public reservaService: ReservaService,
    public usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      identificacion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.required]],
    });

    this.createFormReservas = this.formBuilder.group({
      fechaReserva: ['', Validators.required],
      tipoReserva: ['', Validators.required],
      cantidadPersonas: ['', [Validators.required, Validators.min(1)]],
      observaciones: '',
      estado: '',
    });
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  getReservas() {
    this.reservaService.getReservas().subscribe((response) => {
      this.reservas = response;
      response.forEach((element) => {
        this.idArray.push(element.identificacion);
      });
      //this.crearReserva();
    });
  }

  crearUsuario() {
    const formData = this.createForm.value;
    const formDataRes = this.createFormReservas.value;

    if (
      this.idArray.length === 0 ||
      !this.idArray.includes(formData.identificacion)
    ) {
      //console.log('Se registrara el usuario');
      this.usuarioService.crearUsuario(formData).subscribe(
        (idUsuario: number) => {
          this.showConfirmation = true;
          this.idUsuarioCreado = idUsuario;
/*           console.log('ESTE ES EL ID: ' + this.idUsuarioCreado);
          console.log('aqui debajo imprimire los datos de la rserva');
          console.log(formDataRes); */
          const reservaData = {
            idReserva: '',
            fechaReserva: formDataRes.fechaReserva,
            tipoReserva: formDataRes.tipoReserva,
            cantidadPersonas: formDataRes.cantidadPersonas,
            observaciones: formDataRes.observaciones,
            estado: '',
            idUsuario: idUsuario,
          };

          this.reserva = this.reservaService.crearReserva(reservaData);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('No se registro el usuario');
    }
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }
    const formData = this.createForm.value;
    console.log(formData);
  }
}
