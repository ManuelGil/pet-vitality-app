import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { ResetStateService } from '../../../service/state';

@Component({
  selector: 'form-change-pass',
  templateUrl: './form-change-pass.component.html',
  styleUrls: ['./form-change-pass.component.scss'],
})
export class FormChangePassComponent implements OnInit {
  private resetStateService = inject(ResetStateService);
  private formBuilder = inject(FormBuilder);

  customValidator!: ValidatorFn;
  formChangePass!: FormGroup;

  ngOnInit(): void {
    this.formChangePass = this.formBuilder.group(
      {
        currentPassword: [''],
        newPassword: [''],
        repeatPassword: [''],
      },
      {
        validators: this.customValidator,
      },
    );
  }
  onReset(): void {
    if (!this.formChangePass.valid) return;

    this.resetStateService.onResetPassword(this.formChangePass);
  }
}
