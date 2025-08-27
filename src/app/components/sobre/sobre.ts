import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { AosService } from '../../shared/services/Aos/aos.services';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre  implements AfterViewInit {
  
  constructor(private aos: AosService) {}

  ngAfterViewInit(): void {
    this.aos.initOnce({ duration: 700 });

    setTimeout(() => this.aos.refresh());
  }

  scrollTo(e: Event, selector: string) {
    e.preventDefault();

    const el = document.querySelector(selector) as HTMLElement | null;
    
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
