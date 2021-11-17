import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviseModel } from '@Models/devises/devise.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  formE: FormGroup;
  formB: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formE = formBuilder.group({
      Name: ['', Validators.required],
      Desc: ['', Validators.required],
      Amount: [0, Validators.required],
      Devise: ['xaf'],
    });

    this.formB = formBuilder.group({
      Name: ['', Validators.required],
      Desc: ['', Validators.required],
      Amount: [0, Validators.required],
      Devise: ['xaf'],
    });
  }

  ngOnInit(): void {}

  onSubmitB(): void {
    console.log(this.formB.getRawValue());
  }

  onSubmitE(): void {
    console.log(this.formE.getRawValue());
  }
}
