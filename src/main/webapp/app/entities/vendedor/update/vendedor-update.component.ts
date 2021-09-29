import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { IVendedor, Vendedor } from '../vendedor.model';
import { VendedorService } from '../service/vendedor.service';

@Component({
  selector: 'jhi-vendedor-update',
  templateUrl: './vendedor-update.component.html',
})
export class VendedorUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nombre: [null, [Validators.required]],
    apellido1: [null, [Validators.required]],
    apellido2: [],
    fechaNacimiento: [null, [Validators.required]],
    fechaContratacion: [null, [Validators.required]],
    fechaBaja: [null, [Validators.required]],
    dni: [null, [Validators.required, Validators.maxLength(9)]],
    email: [null, [Validators.required]],
  });

  constructor(protected vendedorService: VendedorService, protected activatedRoute: ActivatedRoute, protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ vendedor }) => {
      this.updateForm(vendedor);
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const vendedor = this.createFromForm();
    if (vendedor.id !== undefined) {
      this.subscribeToSaveResponse(this.vendedorService.update(vendedor));
    } else {
      this.subscribeToSaveResponse(this.vendedorService.create(vendedor));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVendedor>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(vendedor: IVendedor): void {
    this.editForm.patchValue({
      id: vendedor.id,
      nombre: vendedor.nombre,
      apellido1: vendedor.apellido1,
      apellido2: vendedor.apellido2,
      fechaNacimiento: vendedor.fechaNacimiento,
      fechaContratacion: vendedor.fechaContratacion,
      fechaBaja: vendedor.fechaBaja,
      dni: vendedor.dni,
      email: vendedor.email,
    });
  }

  protected createFromForm(): IVendedor {
    return {
      ...new Vendedor(),
      id: this.editForm.get(['id'])!.value,
      nombre: this.editForm.get(['nombre'])!.value,
      apellido1: this.editForm.get(['apellido1'])!.value,
      apellido2: this.editForm.get(['apellido2'])!.value,
      fechaNacimiento: this.editForm.get(['fechaNacimiento'])!.value,
      fechaContratacion: this.editForm.get(['fechaContratacion'])!.value,
      fechaBaja: this.editForm.get(['fechaBaja'])!.value,
      dni: this.editForm.get(['dni'])!.value,
      comision: 0,
      email: this.editForm.get(['email'])!.value,
    };
  }
}
