import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  private observer?: IntersectionObserver;
  private activeId$ = new BehaviorSubject<string>('home');

  constructor(private zone: NgZone) {}

  init(ids: string[], rootMargin = '-45% 0px -55% 0px') {
    this.observer?.disconnect();

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          this.zone.run(() => this.activeId$.next(visible.target.id));
        }
      }, { root: null, threshold: [0.1, 0.25, 0.5], rootMargin });

      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) this.observer!.observe(el);
      });
    });
  }

  get active$() { return this.activeId$.asObservable(); }
}