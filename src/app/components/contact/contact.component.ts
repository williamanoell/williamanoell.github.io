import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactLinks = [
    {
      icon: 'email',
      label: 'Email',
      value: 'williammartins19@outlook.com',
      href: 'mailto:williammartins19@outlook.com',
      external: false,
      color: 'primary'
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: '/in/williamanoell',
      href: 'https://www.linkedin.com/in/williamanoell/',
      external: true,
      color: 'cyan'
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: '/williamanoell',
      href: 'https://github.com/williamanoell',
      external: true,
      color: 'primary'
    }
  ];
}
