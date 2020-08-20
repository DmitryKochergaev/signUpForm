import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../interface";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  form: FormGroup

  isSign = false
  reg = true
  formSub = false
  passWrong = true
  person1: Person

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null,Validators.required),
      gender: new FormControl(null,Validators.required),
      age: new FormControl(null,[Validators.required, Validators.min(10), Validators.max(100)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      pass: new FormControl(null,Validators.required),
      passConf: new FormControl(null,Validators.required),
    })
  }

  signUp() {
    this.isSign = !this.isSign
    this.form.reset()
    this.formSub = false
    this.reg = true

  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.reg = false

    const person: Person = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      gender: this.form.value.gender,
      age: this.form.value.age,
      email: this.form.value.email,
      pass: this.form.value.pass,
    }

    this.person1 = this.form.value

    console.log('form', this.form)
  }

  formCheck() {
    this.formSub = true
  }

  signUpAgain() {
    this.form.reset()
    this.reg = true

  }

  checkPass() {
    if (this.form.value.pass === this.form.value.passConf){
      this.passWrong = false
    }
  }
}
