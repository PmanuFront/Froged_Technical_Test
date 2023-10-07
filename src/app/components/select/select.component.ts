import { Component, Input, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

import { OptionsModel } from 'src/app/models/OptionsModel';

@Component({
  selector: 'froged-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: SelectComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectComponent
    }
  ],
  imports: [
    CommonModule
  ]
})

export class SelectComponent implements OnInit, ControlValueAccessor, Validator {
  @ViewChild('fake_select_container') miDiv!: ElementRef;
  @Input() OptionsData: OptionsModel[] = [];
  @Input() DefaultValue?: OptionsModel;
  @Input() Label?: string;

  public selectedOption: OptionsModel | undefined;
  public isOptionsVisibles: boolean = false;

  touched = false;
  disabled = false;
  isInvalid = false;

  constructor() {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.miDiv && !this.miDiv.nativeElement.contains(event.target)) {
      this.isOptionsVisibles = false;
    } 
    // else if(this.miDiv && this.miDiv.nativeElement.contains(event.target)) {
    // }
  }

  public ngOnInit(): void {
    if(this.DefaultValue && this.OptionsData.some(option => JSON.stringify(option) == JSON.stringify(this.DefaultValue))) {this.selectedOption = this.DefaultValue}
    else if(this.DefaultValue && !this.OptionsData.some(option => JSON.stringify(option) == JSON.stringify(this.DefaultValue))) console.error('Default value introduce was not included into options list');
  }

  public selectOption(optionSelected: OptionsModel) {
    this.markAsTouched();
    if(!this.disabled) {
      this.isOptionsVisibles = !this.isOptionsVisibles;
      this.selectedOption = optionSelected;
      this.onChange(this.selectedOption);
    }
  }

  public showOptions(e: Event) {
    e.preventDefault();
    this.markAsTouched();
    if(!this.disabled) {
      this.isOptionsVisibles = !this.isOptionsVisibles;
    }
  }

  onChange = (option: any) => {};

  onTouched = () => {};

  writeValue(option: OptionsModel) {
    this.selectedOption = option;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const option = control.value;
    if (typeof(option) !== 'object') {
      this.isInvalid = true;
      console.error('Setted value is not valid: ', control);
      return {
        mustBeAnObject: {
          option
        }
      };
    } else{
      this.isInvalid = false;
      return null
    };
  }

  // registerOnValidatorChange(value: any): ValidationErrors | null {
  //   console.log('registerOnValidatorChange', value);
  //   if(typeof(value) != 'number') {
  //     return {
  //       mustBeAnObject: {
  //         value
  //       }
  //     };
  //   } else return null;
  // }
} 
