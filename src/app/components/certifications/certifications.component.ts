import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'Criando um Sistema e Abstraindo um Celular com POO em C#',
      issuer: 'DIO – Digital Innovation One',
      year: '2026',
      icon: '🔷',
      category: 'C# / .NET'
    },
    {
      name: 'Classes Abstratas e Interfaces com C#',
      issuer: 'DIO – Digital Innovation One',
      year: '2026',
      icon: '🔷',
      category: 'C# / .NET'
    },
    {
      name: 'Introdução ao Ambiente .NET e Projetos Colaborativos',
      issuer: 'DIO – Digital Innovation One',
      year: '2025',
      icon: '🟣',
      category: '.NET'
    },
    {
      name: 'Princípios de Desenvolvimento de Aplicações',
      issuer: 'DIO – Digital Innovation One',
      year: '2025',
      icon: '💡',
      category: 'Fundamentos'
    }
  ];
}
