import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { options } from '../../mocks/SelectData';
import { OptionsModel } from '../../models/OptionsModel';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectComponent,
  ],
})
export class MainComponent {
  public options: OptionsModel[] = options;

  constructor(private fb: FormBuilder) {}
  
  form = this.fb.group({
    select: ['' as any, Validators.required]
  });  

  public showValue(): void {
    console.log('valor del form control', this.form.controls['select'].value);
  }

  public setSelectValue(): void {
    this.form.controls['select'].setValue(2);
    console.log(this.form)
  }

  public enableDisableSelect(): void {
    this.form.controls['select'].disabled ? this.form.controls['select'].enable() : this.form.controls['select'].disable();
  }
}
