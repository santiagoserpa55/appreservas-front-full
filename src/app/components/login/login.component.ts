import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuarios } from 'src/app/models/Usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  public constructor(
    public formBuilder: FormBuilder,
    public userService: UsuarioService,
    private router: Router

  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',],
      password: ['',]
    });
  }

  ngOnInit(): void { }

  ingresar() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.userService.login(email, password).subscribe(
        (response: Usuarios) => {
          console.log("User ok: ", response);
          this.router.navigate(['/reservas']);
        },
        (error: any) => {
          console.error('Error de autenticacion', error);
          this.router.navigate(['']);
        }
      )
    }
  }
}
