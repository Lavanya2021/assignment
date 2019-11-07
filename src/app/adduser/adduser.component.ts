import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Register(regForm:NgForm){  
    console.log(regForm);  
  }  

}
