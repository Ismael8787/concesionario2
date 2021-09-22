import { IVenta } from 'app/entities/venta/venta.model';

export interface ICoche {
  id?: number;
  nombre?: string;
  modelo?: string;
  precio?: number;
  vendido?: boolean;
  venta?: IVenta | null;
}

export class Coche implements ICoche {
  constructor(
    public id?: number,
    public nombre?: string,
    public modelo?: string,
    public precio?: number,
    public vendido?: boolean,
    public venta?: IVenta | null
  ) {
    this.vendido = this.vendido ?? false;
  }
}

export function getCocheIdentifier(coche: ICoche): number | undefined {
  return coche.id;
}
