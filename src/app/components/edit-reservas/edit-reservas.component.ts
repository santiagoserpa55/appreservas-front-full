import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-reservas',
  templateUrl: './edit-reservas.component.html',
  styleUrls: ['./edit-reservas.component.css']
})
export class EditReservasComponent implements OnInit {
  showConfirmation: any;
  editFormFormReservas!: FormGroup<any>;
  editFormUser!: FormGroup<any>;


  ngOnInit(): void {
    
  }


  confirmar() {

  }

  editUsuario() {

  }

}
