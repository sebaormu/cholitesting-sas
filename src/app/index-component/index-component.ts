import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
  
@Component({
  selector: 'app-index-component',
  imports: [CommonModule,
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    ],
  templateUrl: './index-component.html',
  styleUrl: './index-component.css',
})
export class IndexComponent { 
  menuOpen = false;
  currentYear = new Date().getFullYear();
 
  // Typewriter
  typewriterDisplay = signal('');
  twCursorBlink = false;
  private typewriterPhrases = ['fiables.', 'que escala.', 'que impresiona.', 'con QA total.'];
  private twIndex = 0;
  private twCharIndex = 0;
  private twDeleting = false;
 
  badgeVisible = false;
  titleLine1Visible = false;
  descVisible = false;
  statsVisible = false;
  actionsVisible = false;
  terminalVisible = false;
 
  // Terminal
  isTypingTerminal = false;
  terminalRunning = false;
  showProgress = false;
  progressPct = 0;

  features = [
    { title: 'Testing desde el día 1', desc: 'No esperamos al final. Las pruebas son parte del proceso desde el primer sprint.' },
    { title: 'Equipos certificados', desc: 'Ingenieros con certificaciones en las principales plataformas cloud y QA.' },
    { title: 'Entrega predecible', desc: 'Sprints claros, sin sorpresas ni deuda técnica acumulada.' },
    { title: 'Soporte post-lanzamiento', desc: 'Seguimos contigo después del go-live con monitoreo y mantenimiento.' },
  ];
 
 
  private timers: any[] = [];
 
  ngOnInit() {
    this.startHeroSequence();
    this.startTypewriter();
  }
 
  ngAfterViewInit() {}
 
  ngOnDestroy() {
    this.timers.forEach(t => clearTimeout(t));
  }
 
  startHeroSequence() {
    const add = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      this.timers.push(t);
    };
 
    add(() => this.badgeVisible = true, 100);
    add(() => this.titleLine1Visible = true, 350);
    add(() => this.descVisible = true, 700);
    add(() => this.actionsVisible = true, 1300);
  }
 
  startTypewriter() {
    const tick = () => {
      const phrase = this.typewriterPhrases[this.twIndex];
 
      if (!this.twDeleting) {
        this.typewriterDisplay.set(phrase.substring(0, this.twCharIndex + 1));
        this.twCharIndex++;
        if (this.twCharIndex === phrase.length) {
          this.twDeleting = true;
          this.twCursorBlink = true;
          const t = setTimeout(() => { this.twCursorBlink = false; tick(); }, 2200);
          this.timers.push(t);
          return;
        }
      } else {
        this.typewriterDisplay.set(phrase.substring(0, this.twCharIndex - 1));
        this.twCharIndex--;
        if (this.twCharIndex === 0) {
          this.twDeleting = false;
          this.twIndex = (this.twIndex + 1) % this.typewriterPhrases.length;
        }
      }
 
      const speed = this.twDeleting ? 45 : 80;
      const t = setTimeout(tick, speed);
      this.timers.push(t);
    };
 
    // Start after initial delay
    const t = setTimeout(tick, 900);
    this.timers.push(t);
  }
 
  toggleMenu() { this.menuOpen = !this.menuOpen; }
 
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen = false;
  }
}
