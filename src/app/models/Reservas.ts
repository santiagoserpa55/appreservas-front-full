export class Reservas {
  nombres: string;
  apellidos: string;
  tipo_documento: string;
  identificacion: string;
  email: string;
  fecha_reserva: string;
  tipo_reserva: string;
  cantidad_personas: number;
  estado: string;
  observaciones: string;
  id_reserva: string;

  constructor(
    nombres: string,
    apellidos: string,
    tipo_documento: string,
    identificacion: string,
    email: string,
    fecha_reserva: string,
    tipo_reserva: string,
    cantidad_personas: number,
    estado: string,
    observaciones: string,
    id_reserva: string
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipo_documento = tipo_documento;
    this.identificacion = identificacion;
    this.email = email;
    this.fecha_reserva = fecha_reserva;
    this.tipo_reserva = tipo_reserva;
    this.cantidad_personas = cantidad_personas;
    this.estado = estado;
    this.observaciones = observaciones;
    this.id_reserva = id_reserva;
  }
}
