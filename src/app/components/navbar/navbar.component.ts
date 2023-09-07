import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ctaStyleReg: any;
  ctaStyleLogin: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.ctaStyleReg = {
      background: 'var(--bg-secondary)',
      color: 'var(--txt-primary)',
      'border-radius': '0px !important',
      'text-transform': 'uppercase',
    };
    this.ctaStyleLogin = {
      background: '#fff',
      color: 'var(--bg-primary)',
      'border-radius': '0px !important',
      'text-transform': 'uppercase',
    };
  }

  navigateToPage() {
    console.log('trigerred');
    this.router.navigate(['/list']);
  }
}
