import * as dayjs from 'dayjs';
import { IComprador } from 'app/entities/comprador/comprador.model';
import { IVendedor } from 'app/entities/vendedor/vendedor.model';

export interface IVenta {
  id?: number;
  fecha?: dayjs.Dayjs;
  precioTotal?: number;
  comprador?: IComprador;
  vendedor?: IVendedor;
  numFactura?: string;
}

export class Venta implements IVenta {
  constructor(
    public id?: number,
    public fecha?: dayjs.Dayjs,
    public precioTotal?: number,
    public comprador?: IComprador,
    public vendedor?: IVendedor,
    public numFactura?: string
  ) {}
}

export function getVentaIdentifier(venta: IVenta): number | undefined {
  return venta.id;
}
