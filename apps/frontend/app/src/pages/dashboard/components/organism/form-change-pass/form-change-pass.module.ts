import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormChangePassComponent } from './form-change-pass.component';

const routes: Routes = [
  {
    path: '',
    component: FormChangePassComponent,
  },
];

@NgModule({
  declarations: [FormChangePassComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [FormChangePassComponent],
})
export class FormChangePassModule {}
