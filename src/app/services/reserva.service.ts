import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservas } from '../models/Reservas';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {

  private baseUrl = environment.serviceURL;
  constructor(private http: HttpClient) {}

  confirmar(idReserva: string) {
    const url = `${this.baseUrl}api/v1/reservas/confirmar-reserva?id=${idReserva}`;
    const estadoReserva = { estado: 'CONFIRMADO' };
    return this.http.put<Reservas[]>(url, estadoReserva);
  }

  getReservasById(id: string) {
    const url = `${this.baseUrl}api/v1/reservas/filtrarId?id=${id}`;
    return this.http.get<Reservas[]>(url);
  }

  getReservas() {
    return this.http.get<Reservas[]>(
      this.baseUrl + 'api/v1/reservas/listareservas'
    );
  }

  crearReserva(reservaForml: any) {
    const crearReservaJson = JSON.stringify(reservaForml);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(this.baseUrl + 'api/v1/reservas/crear-reserva', crearReservaJson, {
        headers,
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    1;
  }

  updateReserva(idres: string, reserva: Reservas) {
    const url = `${this.baseUrl}api/v1/reservas/update-reserva?id=${idres}`;
    this.http.put(url, reserva).subscribe(
      (response) => {
        console.log("Update exitoso");
      },
      (error) => {
        console.log("error en la peticion", error);
        
      }
    );
  }


}
