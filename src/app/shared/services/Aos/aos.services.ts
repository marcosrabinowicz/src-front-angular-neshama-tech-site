import { Injectable } from '@angular/core';

import AOS from 'aos';

@Injectable({
  providedIn: 'root',
})
export class AosService {
  private inited = false;

  initOnce(opts?: Partial<AOS.AosOptions>) {
    if (this.inited) return;
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      ...opts,
    });
    this.inited = true;

    // garante layout inicial calculado
    setTimeout(() => this.refreshHard());
  }

  refresh() {
    try {
      AOS.refresh();
    } catch {}
  }
  refreshHard() {
    try {
      AOS.refreshHard();
    } catch {}
  }
}
