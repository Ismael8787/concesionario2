import * as dayjs from 'dayjs';

export interface IVendedor {
  id?: number;
  nombre?: string;
  apellido1?: string;
  apellido2?: string | null;
  fechaNacimiento?: dayjs.Dayjs;
  fechaContratacion?: dayjs.Dayjs;
  fechaBaja?: dayjs.Dayjs;
  dni?: string;
  comision?: number;
}

export class Vendedor implements IVendedor {
  constructor(
    public id?: number,
    public nombre?: string,
    public apellido1?: string,
    public apellido2?: string | null,
    public fechaNacimiento?: dayjs.Dayjs,
    public fechaContratacion?: dayjs.Dayjs,
    public fechaBaja?: dayjs.Dayjs,
    public dni?: string,
    public comision?: number
  ) {}
}

export function getVendedorIdentifier(vendedor: IVendedor): number | undefined {
  return vendedor.id;
}
