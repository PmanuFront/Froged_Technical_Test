import { Component, OnInit } from '@angular/core';
import { options } from './mocks/SelectData';
import { OptionsModel } from './models/OptionsModel';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Froged_Select_Component';

  
  constructor(private fb: FormBuilder) {}
  
  
  public ngOnInit(): void {
    console.log('Init')
  }
  
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
