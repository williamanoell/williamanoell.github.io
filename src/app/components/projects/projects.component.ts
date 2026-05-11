import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  featured: boolean;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Pokédex Angular',
      description: 'Aplicação Angular interativa integrada com a PokeAPI. Listagem paginada, busca por nome, filtros por tipo e habitat. Estrutura baseada em componentes com interface responsiva e design moderno.',
      tags: ['Angular', 'TypeScript', 'PokeAPI', 'RxJS', 'SCSS', 'REST API'],
      githubUrl: 'https://github.com/williamanoell/Pokedex',
      featured: true,
      icon: '🎮'
    },
    {
      name: 'Sistema de Gestão Empresarial',
      description: 'Aplicação web corporativa desenvolvida com ASP.NET Core + Angular + SQL Server. Sistema completo para gerenciamento de usuários, permissões e relatórios com autenticação segura.',
      tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'C#', 'Entity Framework', 'REST APIs'],
      featured: true,
      icon: '🏢'
    },
    {
      name: 'App Mobile de Controle Financeiro',
      description: 'Aplicativo mobile desenvolvido com React Native e TypeScript para gerenciamento de despesas e receitas. Integrado a REST API para persistência de dados, com UI intuitiva e responsiva.',
      tags: ['React Native', 'TypeScript', 'REST API', 'Mobile', 'Finance'],
      featured: false,
      icon: '💰'
    }
  ];
}
