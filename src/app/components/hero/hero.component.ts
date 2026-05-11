import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  private roles = [
    'Full Stack .NET Developer',
    'Angular Specialist',
    'React Native Developer',
    'TypeScript Enthusiast'
  ];
  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typeInterval: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typeInterval) {
      clearTimeout(this.typeInterval);
    }
  }

  private startTypewriter(): void {
    const type = () => {
      const currentRole = this.roles[this.currentRoleIndex];

      if (this.isDeleting) {
        this.displayedText = currentRole.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
      } else {
        this.displayedText = currentRole.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
      }

      let delay = this.isDeleting ? 60 : 100;

      if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
        delay = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        delay = 400;
      }

      this.typeInterval = setTimeout(type, delay);
    };

    this.typeInterval = setTimeout(type, 800);
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
