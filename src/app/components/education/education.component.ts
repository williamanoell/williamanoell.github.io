import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: string;
  type: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations: Education[] = [
    {
      institution: 'Instituto Federal do Sul de Minas Gerais',
      degree: 'Bacharelado em Engenharia de Computação',
      period: '2015 – 2023',
      description: 'Formação sólida em fundamentos de computação, algoritmos, estruturas de dados, engenharia de software, redes e sistemas operacionais. Base teórica e prática para desenvolvimento de soluções tecnológicas complexas.',
      icon: '🎓',
      type: 'Graduação'
    },
    {
      institution: 'Uptime',
      degree: 'Inglês',
      period: '2022 – 2024',
      description: 'Curso de idiomas com foco em inglês para comunicação profissional e técnica. Nível intermediário com capacidade de leitura de documentação técnica, participação em reuniões e comunicação escrita em inglês.',
      icon: '🌐',
      type: 'Idioma'
    }
  ];
}
