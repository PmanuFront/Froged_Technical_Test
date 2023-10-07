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
    SelectComponent
  ],
})
export class MainComponent {

  constructor(private fb: FormBuilder) {}
  
  form1 = this.fb.group({
    select: [60, Validators.required]
  });  

  public showValue(): void {
    console.log('formulario', this.form1);
    console.log('valor del form control', this.form1.controls['select'].value);
  }

  public setSelectValue(): void {
    console.log('set value')
    this.form1.controls['select'].setValue(2);
    console.log(this.form1)
  }

  public options: OptionsModel[] = options;

}
