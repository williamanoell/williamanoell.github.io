import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tags: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Iatrix LTDA',
      role: 'Desenvolvedor Web Júnior – Full Stack .NET',
      period: 'Mar 2025 – Presente',
      location: 'Poços de Caldas, MG',
      type: 'Full Stack',
      current: true,
      tags: ['C#', 'ASP.NET Core', 'Razor Pages', 'Entity Framework', 'REST APIs', 'Git'],
      bullets: [
        'Desenvolvimento e manutenção de aplicações web corporativas usando C#, ASP.NET Core, Razor Pages e Entity Framework',
        'Implementação e consumo de REST APIs para integrações entre sistemas',
        'Desenvolvimento full-stack de funcionalidades completas: lógica de negócio, UI e integração com banco de dados',
        'Otimização de fluxos de dados, aumentando a eficiência de comunicação entre serviços em ~40%',
        'Controle de versão com Git e colaboração em equipe de desenvolvimento'
      ]
    },
    {
      company: 'Kapibara Softwares',
      role: 'Desenvolvedor Front-end & Mobile',
      period: 'Mai 2022 – Jun 2024',
      location: 'Poços de Caldas, MG',
      type: 'Frontend & Mobile',
      current: false,
      tags: ['Angular', 'TypeScript', 'Angular Material', 'React Native', 'REST APIs'],
      bullets: [
        'Desenvolvimento de aplicações web com Angular e TypeScript, seguindo arquitetura baseada em componentes',
        'Criação de interfaces modernas e responsivas com Angular Material e princípios de design system modular',
        'Desenvolvimento de aplicativos mobile com React Native integrados a APIs REST',
        'Integração com APIs REST para consumo de dados e comunicação entre sistemas',
        'Redução do tempo de carregamento do front-end em ~25% através de otimizações de performance',
        'Ciclo completo de desenvolvimento: levantamento de requisitos, implementação e entrega'
      ]
    }
  ];
}
