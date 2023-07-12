export class Usuarios {
  nombres: string;
  apellidos: string;
  tipo_documento: string;
  identificacion: string;
  email: string;
  password: string;


  constructor(
    nombres: string,
    apellidos: string,
    tipo_documento: string,
    identificacion: string,
    email: string,
    password: string,

  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipo_documento = tipo_documento;
    this.identificacion = identificacion;
    this.email = email;
    this.password = password;
  }
}