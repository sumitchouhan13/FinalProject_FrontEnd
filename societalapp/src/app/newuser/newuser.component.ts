import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
})
export class NewuserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.userForm = new FormGroup({
      owner: new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(45)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      building: new FormControl('', [Validators.required]),
      owned: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  submitUser() {
    Object.keys(this.userForm.controls).forEach((field) => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if (this.userForm.valid) {
      this.userService.saveUser(this.userForm.value).subscribe(
        () => {
          this.router.navigate(['/readUser']);
        },
        () => {
          alert('Something Went Wrong');
        }
      );
    }
  }
}
