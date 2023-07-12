import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Reservas } from "../models/Reservas";

@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  getReservasById(id: string) {    
    const url = `${this.baseUrl}api/v1/reservas/filtrarId?id=${id}`;
    return this.http.get<Reservas[]>(url);
  }

  private baseUrl = environment.serviceURL;
  constructor(private http: HttpClient) { }

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
      );1
  }

}