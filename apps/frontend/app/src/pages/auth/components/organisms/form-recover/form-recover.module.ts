import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormRecoverComponent } from './form-recover.component';

const routes: Routes = [
  {
    path: '',
    component: FormRecoverComponent,
  },
];

@NgModule({
  declarations: [FormRecoverComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [FormRecoverComponent],
})
export class FormRecoverModule {}
