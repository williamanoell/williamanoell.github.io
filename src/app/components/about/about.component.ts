import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { value: '3+', label: 'Anos de Experiência', icon: '🏆' },
    { value: '2', label: 'Empresas', icon: '🏢' },
    { value: '10+', label: 'Projetos', icon: '🚀' }
  ];

  highlights = [
    { label: 'Angular Expert', color: 'primary' },
    { label: '.NET Developer', color: 'cyan' },
    { label: 'Mobile React Native', color: 'primary' }
  ];
}
