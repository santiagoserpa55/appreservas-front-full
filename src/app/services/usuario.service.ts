import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/Usuarios';
import { environment } from '../environments/environment';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private baseUrl = environment.serviceURL;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = new HttpParams().set('email', email).set('password', password);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http.post<Usuarios>(
      this.baseUrl + 'api/v1/usuarios/login',
      body.toString(),
      { headers }
    );
  }

  crearUsuario(reservaForm: Usuarios) {
    const crearReservaJson = JSON.stringify(reservaForm);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post<number>(
        this.baseUrl + 'api/v1/usuarios/crear-usuario',
        crearReservaJson,
        { headers }
      )
      .pipe(map((idUsuario: number) => idUsuario));
  }

  updateUser(idUser: string, user: Usuarios) {
    const url = `${this.baseUrl}api/v1/usuarios/update-user?id=${idUser}`;
    this.http.put(url, user).subscribe(
      (response) => {
        console.log('update exitoso', response);
      },
      (error) => {
        console.log('error en la peticion, ', error);
      }
    );
  }
}
