import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { IComprador, Comprador } from '../comprador.model';
import { CompradorService } from '../service/comprador.service';

@Component({
  selector: 'jhi-comprador-update',
  templateUrl: './comprador-update.component.html',
})
export class CompradorUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    dni: [null, [Validators.required, Validators.maxLength(9)]],
    nombre: [null, [Validators.required]],
    apellido1: [null, [Validators.required]],
    apellido2: [],
    fechaNacimiento: [null, [Validators.required]],
    direccion: [null, [Validators.required]],
  });

  constructor(protected compradorService: CompradorService, protected activatedRoute: ActivatedRoute, protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ comprador }) => {
      this.updateForm(comprador);
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const comprador = this.createFromForm();
    if (comprador.id !== undefined) {
      this.subscribeToSaveResponse(this.compradorService.update(comprador));
    } else {
      this.subscribeToSaveResponse(this.compradorService.create(comprador));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IComprador>>): void {
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

  protected updateForm(comprador: IComprador): void {
    this.editForm.patchValue({
      id: comprador.id,
      dni: comprador.dni,
      nombre: comprador.nombre,
      apellido1: comprador.apellido1,
      apellido2: comprador.apellido2,
      fechaNacimiento: comprador.fechaNacimiento,
      direccion: comprador.direccion,
    });
  }

  protected createFromForm(): IComprador {
    return {
      ...new Comprador(),
      id: this.editForm.get(['id'])!.value,
      dni: this.editForm.get(['dni'])!.value,
      nombre: this.editForm.get(['nombre'])!.value,
      apellido1: this.editForm.get(['apellido1'])!.value,
      apellido2: this.editForm.get(['apellido2'])!.value,
      fechaNacimiento: this.editForm.get(['fechaNacimiento'])!.value,
      direccion: this.editForm.get(['direccion'])!.value, //chao
    };
  }
}
