import { Component, OnInit } from '@angular/core';
import { options } from './mocks/SelectData';
import { OptionsModel } from './models/OptionsModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Froged_Select_Component';

  constructor(){
  }

  public ngOnInit(): void {
    console.log('Init')
  }

  public options: OptionsModel[] = options;
}
