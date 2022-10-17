import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  student!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.student = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null),
      interest: new FormGroup({
        title: new FormControl(),
        description: new FormControl(),
      }),
      dreamJob: new FormGroup({
        companyName: new FormControl(),
        position: new FormControl(),
        jobDescription: new FormControl(),
      }),
    });
  }

  onFormSubmit() {
    console.log(this.student);
    console.log(this.student.value);

    //ფორმის დარესეტება
    // this.student.reset();

    // მნიშვნელობის ამოღება
    var name = this.student.get('name')?.value;
    console.log(name);
  }

  // მნიშვნელობების დასეტვა
  setValuesFromFb() {
    this.student.get('name')?.setValue('revazi');
    this.student.get('surname')?.setValue('Kukhianidze');
    this.student.get('email')?.setValue('rezo@gmail.com');
  }
}
