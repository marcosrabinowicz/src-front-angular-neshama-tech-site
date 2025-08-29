import { Injectable } from '@angular/core';

type AOSModule = {
  init: (opts?: any) => void;
  refresh: () => void;
  refreshHard: () => void;
};

@Injectable({
  providedIn: 'root',
})
export class AosService {
  private inited = false;
  private loading?: Promise<AOSModule>;

  private load(): Promise<AOSModule> {
    if (!this.loading) {
      this.loading = import('aos').then(
        (m: any) => (m.default ?? m) as AOSModule,
      );
    }
    return this.loading;
  }

  initOnce(opts?: Record<string, any>): void {
    void this.load().then((AOS) => {
      if (this.inited) return;
      AOS.init({ duration: 600, easing: 'ease-out', once: true, ...opts });
      this.inited = true;
      setTimeout(() => {
        try {
          AOS.refreshHard();
        } catch {}
      });
    });
  }

  refresh(): void {
    void this.load().then((AOS) => {
      try {
        AOS.refresh();
      } catch {}
    });
  }
  refreshHard(): void {
    void this.load().then((AOS) => {
      try {
        AOS.refreshHard();
      } catch {}
    });
  }
}
