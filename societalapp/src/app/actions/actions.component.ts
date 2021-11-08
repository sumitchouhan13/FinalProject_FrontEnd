import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
})
export class ActionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  servicesItem = [
    {
      title: 'Create User',
      src: 'https://img.icons8.com/material-outlined/24/000000/create.png',
      id: 1,
    },
    {
      title: 'Read User Details',
      src: 'https://img.icons8.com/ios-filled/24/000000/reading.png',
      id: 2,
    },
    {
      title: 'Update Existing User',
      src: 'https://img.icons8.com/ios-filled/24/000000/approve-and-update.png',
      id: 3,
    },
    {
      title: 'Delete User',
      src: 'https://img.icons8.com/ios-glyphs/24/000000/delete-sign.png',
      id: 4,
    },
  ];

  click(item: number) {
    if (item == 1) {
      this.router.navigate(['/createUser']);
    } else if (item == 2) {
      this.router.navigate(['/readUser']);
    } else if (item == 3) {
      this.router.navigate(['/readUser']);
    } else if (item == 4) {
      this.router.navigate(['/readUser']);
    }
  }
}
