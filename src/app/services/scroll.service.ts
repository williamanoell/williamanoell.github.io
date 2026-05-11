import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private activeSection$ = new BehaviorSubject<string>('hero');
  activeSectionId = this.activeSection$.asObservable();

  private observer: IntersectionObserver | null = null;
  private navObserver: IntersectionObserver | null = null;

  constructor(private ngZone: NgZone) {}

  initScrollAnimations(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -60px 0px'
        }
      );

      // Observe all elements with animate-on-scroll
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => this.observer!.observe(el));
    });
  }

  initActiveSectionTracking(): void {
    this.ngZone.runOutsideAngular(() => {
      const sections = document.querySelectorAll('section[id]');

      this.navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.ngZone.run(() => {
                this.activeSection$.next(entry.target.id);
              });
            }
          });
        },
        {
          threshold: 0.4
        }
      );

      sections.forEach(section => this.navObserver!.observe(section));
    });
  }

  observeElements(elements: NodeListOf<Element> | Element[]): void {
    this.ngZone.runOutsideAngular(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );

      elements.forEach(el => obs.observe(el));
    });
  }

  destroy(): void {
    this.observer?.disconnect();
    this.navObserver?.disconnect();
  }
}
