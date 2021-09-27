import * as dayjs from 'dayjs';

export interface IComprador {
  id?: number;
  dni?: string;
  nombre?: string;
  apellido1?: string;
  apellido2?: string | null;
  fechaNacimiento?: dayjs.Dayjs;
  direccion?: string;
  cocheComprado?: number;
}

export class Comprador implements IComprador {
  constructor(
    public id?: number,
    public dni?: string,
    public nombre?: string,
    public apellido1?: string,
    public apellido2?: string | null,
    public fechaNacimiento?: dayjs.Dayjs,
    public direccion?: string,
    public cocheComprado?: number
  ) {}
}

export function getCompradorIdentifier(comprador: IComprador): number | undefined {
  return comprador.id;
}
