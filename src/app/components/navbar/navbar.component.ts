import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { Subscription } from 'rxjs';

interface NavLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';
  private sub!: Subscription;

  navLinks: NavLink[] = [
    { label: 'Sobre', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experiência', target: 'experience' },
    { label: 'Projetos', target: 'projects' },
    { label: 'Contato', target: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.sub = this.scrollService.activeSectionId.subscribe(id => {
      this.activeSection = id;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  scrollTo(target: string): void {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
