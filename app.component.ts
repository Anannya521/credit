import { Component } from '@angular/core';

import { Validators,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APPLY FOR CREDIT CARD';
  registerform:FormGroup;
  constructor(){
    this.registerform=new FormGroup({
     
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      gname:new FormControl(null,[Validators.required]),
      
      dob:new FormControl(null,[Validators.required]),
      cnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]),
      anum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
      annum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{7}')]),
      adres:new FormControl(null,[Validators.required]),
      place:new FormControl(null,[Validators.required]),
      code:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{6}')])
    });
  }
  get type(){
    return this.registerform.get('type');
  }
  get fname(){
    return this.registerform.get('fname');
  }
  get lname(){
    return this.registerform.get('lname');
  }
  get gname(){
    return this.registerform.get('gname');
  }
  
  get dob(){
    return this.registerform.get('dob');
  }
  get cnum(){
    return this.registerform.get('cnum');
  }
  get anum(){
    return this.registerform.get('anum');
  }
  get annum(){
    return this.registerform.get('annum');
  }
 
  get adres(){
    return this.registerform.get('adres');
  }
  get place(){
    return this.registerform.get('place');
  }
  get code(){
    return this.registerform.get('code');
  }
  create(){
    console.log(this.registerform);
    return this.registerform.reset();
  }
}

