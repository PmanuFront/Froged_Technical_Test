import { Component, Input, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { OptionsModel } from 'src/app/models/OptionsModel';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {
  @ViewChild('fake_select_container') miDiv!: ElementRef;
  @Input() OptionsData: OptionsModel[] = [];
  @Input() DefaultValue?: OptionsModel;
  @Input() BorderColor: string = '';
  @Input() Label?: string;
  @Input() value: OptionsModel | undefined;

  public isOptionsVisibles: boolean = false;

  constructor() {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.miDiv && !this.miDiv.nativeElement.contains(event.target)) {
      console.log('Clic fuera del div');
      this.isOptionsVisibles = false;
    } else if(this.miDiv && this.miDiv.nativeElement.contains(event.target)) {
      console.log('Clic dentro del div');
    }
  }

  public ngOnInit(): void {
    if(this.DefaultValue && this.OptionsData.some(option => JSON.stringify(option) == JSON.stringify(this.DefaultValue))) {this.value = this.DefaultValue}
    else if(this.DefaultValue && !this.OptionsData.some(option => JSON.stringify(option) == JSON.stringify(this.DefaultValue))) console.error('Default value introduce was not included into options list');
  }

  public selectOption(optionSelected: OptionsModel) {
    this.value = optionSelected;
    this.isOptionsVisibles = !this.isOptionsVisibles;
  }

  public showOptions(e: Event) {
    e.preventDefault();
    this.isOptionsVisibles = !this.isOptionsVisibles;
  }
} 
