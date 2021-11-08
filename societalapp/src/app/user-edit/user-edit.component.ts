import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  id: number = 0;
  userForm: FormGroup;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = new FormGroup({
      owner: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      building: new FormControl('', [Validators.required]),
      owned: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.userService.getUserByID(paramsData.id).subscribe((data) => {
        delete data.id;
        this.userForm.setValue(data);
      });
    });
  }

  submitdata() {
    if (this.userForm.valid) {
      alert('Success.... Please Click OK to Continue');
      this.userService
        .updateUserById(this.id, this.userForm.value)
        .subscribe((data) => {
          this.router.navigate(['/readUser']);
        });
    }
  }
}
