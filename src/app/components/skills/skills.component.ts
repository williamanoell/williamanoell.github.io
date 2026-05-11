import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: '🖥️',
      skills: [
        { name: 'Angular', icon: '🅰' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'JavaScript', icon: '🟡' },
        { name: 'HTML5', icon: '🟠' },
        { name: 'CSS3', icon: '🔵' },
        { name: 'Angular Material', icon: '🎨' },
        { name: 'RxJS', icon: '⚡' },
        { name: 'Bootstrap', icon: '💜' },
        { name: 'Flexbox', icon: '📐' }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'C#', icon: '🔷' },
        { name: 'ASP.NET Core', icon: '🌐' },
        { name: 'Razor Pages', icon: '📄' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'Entity Framework', icon: '🗄️' },
        { name: '.NET', icon: '🟣' }
      ]
    },
    {
      category: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', icon: '⚛️' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'REST API', icon: '🔗' }
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server', icon: '🏛️' },
        { name: 'MySQL', icon: '🐬' }
      ]
    },
    {
      category: 'Ferramentas',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: '🌿' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Visual Studio', icon: '💜' },
        { name: 'VS Code', icon: '🔵' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Azure', icon: '☁️' }
      ]
    }
  ];
}
