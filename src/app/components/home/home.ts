import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AosService } from '../../shared/services/Aos/aos.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  constructor(private aos: AosService) {}

  ngAfterViewInit(): void {
    this.aos.initOnce({ duration: 700 });
    
    setTimeout(() => this.aos.refresh());
  }

  scrollTo(event: Event, selector: string) {
    event.preventDefault();

    const el = document.querySelector(selector) as HTMLElement | null;

    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
