import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  javaSkill = 85;
  pythonSkill = 50;
  jsSkill = 70;
  SQLSkil = 70;
  angularSkill = 50;
  expressSkill = 50;

  animar = false;

  // 1. Inyectamos el detector de cambios
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    // Forzamos a Angular a renderizar las barras en 0% primero
    this.cdRef.detectChanges();

    // 2. Activamos la animación inmediatamente después
    setTimeout(() => {
      this.animar = true;
      this.cdRef.detectChanges(); // Le avisamos que ya cambió a true
    }, 150);
  }
}
