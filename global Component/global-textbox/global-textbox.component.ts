import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as staticData from './global-textbox.content.json';
@Component({
  selector: 'app-global-textbox',
  templateUrl: './global-textbox.component.html',
  styleUrls: ['./global-textbox.component.scss']
})
export class GlobalTextboxComponent implements OnInit {

  @Input() fieldName: string ;
  @Input() catagory:string ;
  @Input() feedBackMsg:string ;
  @Input() errorMsg:string ; 
  @Input() formGroup:FormGroup ;
  @Input() disabled:boolean ;
  @Input() label:string ;
  @Input() placeholder:string ;

  control: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.getControl();  
  }

  getControl()
  {
    this.control = this.formGroup.get(this.fieldName) as FormControl;
  }

}
